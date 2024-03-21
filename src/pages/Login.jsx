import React, { useState } from "react";
import { getIndividualDetail, insertUserName } from "../api/api";
import { useUserContext } from "../hooks/useUserContext";

const Login = () => {
  const { setUsername, setUserId } = useUserContext();

  const [usernameLogin, setUsernameLogin] = useState("");
  const [error, setError] = useState(null);

  async function setUserContext() {
    const data = await getIndividualDetail(usernameLogin);
    setUsername(data.data[0].username);
    setUserId(data.data[0].user_id);

    localStorage.setItem('usernameLogin', data.data[0].username);
    localStorage.setItem('userIdLogin', data.data[0].user_id);
  }
  

  async function handleUserSubmission() {
    try {
      const data = await getIndividualDetail(usernameLogin);
      if (data.data.length > 0) {
        setUserContext();
      } else {
        const response = await insertUserName(usernameLogin);
        if (response.status === 200) {
          setUserContext();
        } else {
          setError(
            "An error occured in login process. Please refresh page and try again"
          );
        }
      }
    } catch (error) {
      console.error(
        `Error occured while inserting username in login, ${error}`
      );
      setError("An error occured in login process");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (usernameLogin.length < 6) {
      setError("Minimum length of 6 characters is required");
    } else {
      setError(null);
      handleUserSubmission();
    }
  }
  
  return (
    <section className="flex items-center flex-col justify-center w-screen h-screen gap-1">
      <p className="text-3xl font-bold tracking-wide mb-4">Login/Register</p>
      {error && <p className="text-red-500 italic">*{error}*</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 py-5 px-8 w-[35rem] shrink mx-4 rounded-lg shadow-lg bg-white"
      >
        <label htmlFor="username" className="flex flex-col gap-1 w-full">
          <p>
            Username
            <span className="text-red-500 text-lg">*</span>
          </p>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="px-2 py-1 border border-gray-300 rounded-lg transition-all focus:outline-8 focus:outline-blue-400"
            value={usernameLogin}
            onChange={(e) => setUsernameLogin(e.target.value)}
            required
          />
        </label>
        <div className="flex w-full justify-center cursor-pointer">
          <button
            type="submit"
            className="px-5 py-1 border-none rounded-lg  cursor-pointer bg-blue-600 text-slate-100"
          >
            Login/Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
