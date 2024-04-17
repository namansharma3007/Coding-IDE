import React, { useState } from "react";
import {
  generateCodeToken,
  insertSubmissionToken,
  tokenSubmission,
} from "../api/api";
import { useUserContext } from "../hooks/useUserContext";
import redis from "../redis/redis";

const Output = ({ editorRef, language }) => {
  const { userid, username } = useUserContext();
  const [output, setOutput] = useState(null);
  const [outputMessage, setOutputMessage] = useState(null);
  const [stdin, setStdin] = useState("");
  const [isError, setIsError] = useState(null);
  const [submissionToken, setSubmissionToken] = useState(null);

  const handleInputChange = (event) => {
    setStdin(event.target.value);
  };
  const runCode = async () => {
    const sourceCodeRun = editorRef.current.getValue();
    if (!sourceCodeRun) return;
    try {
      const generatedToken = await generateCodeToken(
        language,
        sourceCodeRun,
        stdin
      );
      if(generateCodeToken){
        setSubmissionToken(generatedToken);
        getOutputData(generatedToken);
      } else {
        setIsError("Internal server error");
      }
    } catch (error) {
      console.error(error);
      setIsError("Internal server error");
    }
  };

  async function getOutputData(generatedToken) {
    try {
      const output = await tokenSubmission(generatedToken.token);
      setOutput(output);
      setOutputMessage(null);
      generateOutput();
    } catch (error) {
      console.error(`An error occured while running code, ${error}`);
      setIsError("An error occured while running code. Please try again");
    }
  }

  async function saveCode() {
    if(!submissionToken){
      setIsError(`Please run your code once before submitting`)
      return;
    }
    try{
      await redis.del(`submissions:${username}`);
      const response = await insertSubmissionToken(userid, submissionToken.token);
      if(response.status === 200){
        setOutputMessage("Code saved in database")
        setIsError(null);
      } else {
        setIsError("Internal server error");
      }
    } catch(error){
      console.error(`An error occured while submiting code , ${error}`)
      setIsError("An error occured while submiting code. Please try again");
    }
  }

  function generateOutput(){
    if(output && output.errorPersonalised == null){
      setIsError(null);
      if(output.compile_output){
        setOutputMessage(output.compile_output);
      } else {
        setOutputMessage(output.stdout);
      } 
    } else {
      setIsError("Compilation error/Internal server error");
    }
  }

  return (
    <div className="w-full lg:w-1/2 h-[35rem] bg-white">
      <div className="flex gap-2 p-2 border-b border-gray-300 items-center">
        <button
          className="px-5 py-1 rounded-lg cursor-pointer border-none bg-gray-400 tex-gray-100 font-semibold transition-all hover:scale-95"
          onClick={runCode}
        >
          Run Code
        </button>
        <button
          className="px-5 py-1 border-none rounded-lg  cursor-pointer bg-green-500 text-gray-100 font-semibold transition-all hover:scale-95"
          onClick={saveCode}
        >
          Save Code
        </button>
      </div>
      <div className="p-2">
        <p>Custom input</p>
        <textarea
          className="border rounded border-black w-full p-1"
          rows="5"
          value={stdin}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="p-2">
        <p>Output</p>
        {isError && <p className="font-semibold text-red-500">*{isError}*</p>}
        {
          output
          && <p>{outputMessage}</p>
        }
      </div>
    </div>
  );
};

export default Output;
