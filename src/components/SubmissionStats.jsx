import React, { useState } from "react";
import { languageName } from "../constants/constants";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

function currentDateTime(submisionTime) {
  const currentDate = new Date(submisionTime);
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);
  const hours = ("0" + currentDate.getHours()).slice(-2);
  const minutes = ("0" + currentDate.getMinutes()).slice(-2);
  const seconds = ("0" + currentDate.getSeconds()).slice(-2);

  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}

const SubmissionStats = ({ item }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const submisionTime = currentDateTime(item?.created_at);

  const code = item?.source_code;
  const language = languageName[item?.language_id];
  const languageIdName = "cpp";
  const stdin = item?.stdin;

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex bg-[#F5F2F0] flex-col h-auto shrink overflow-hidden transition-all">
      <div
        className={`flex w-full ${
          isCollapsed ? "h-20" : "h-auto"
        } transition-all`}
      >
        <div className="flex flex-col gap-2 ml-2 mr-2 font-semibold w-max">
          <p>{language}</p>
          <span className="font-normal">{submisionTime}</span>
          <p>Stdin</p>
          <span className="font-normal">{stdin}</span>
        </div>
        <div className="border-l border-gray-400 w-max">
          <SyntaxHighlighter language={languageIdName} style={prism}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

        <button className="collapse-button h-[20rem]" onClick={toggleCollapse}>
          <img
            className={`h-full ${!isCollapsed ? "rotate-180" : ""}`}
            src="/collapse.svg"
            alt="collapse"
          />
        </button>
    </div>
  );
};

export default SubmissionStats;
