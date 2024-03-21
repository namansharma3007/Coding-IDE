import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import redis from "../redis/redis";

const Navbar = () => {
  const{username, setUsername, setUserId} = useUserContext();

  async function handleLogout(){
    setUsername(null);
    setUserId(null);
    await redis.del("usernameLogin");
    await redis.del("userIdLogin");
  }

  return (
    <div className="w-screen flex px-2 justify-between h-12 items-center border-b border-gray-400">
      <div className="h-full p-1" title="Home">
        <img className="h-full" src="/icon.png" alt="icon" />
      </div>
      <div className="flex gap-4">
        <div className="font-semibold tracking-wide hover:text-blue-600 transition-all px-10 border-l border-r border-gray-400 hover:scale-95">
          <Link to="/">
            IDE
          </Link>
        </div>
        <div className="font-semibold tracking-wide hover:text-blue-600 transition-all px-10 border-l border-r border-gray-400 hover:scale-95">
          <Link to="/submissions">
            Submissions
          </Link>
        </div>
      </div>
      
      <div className={`${username ? "flex" : "none"} gap-3 items-center`}>
        <p className="font-semibold underline">{username}</p>
        <button type="button" className="px-4 py-1 bg-red-500 rounded-lg font-semibold border-none transition-all hover:scale-95" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
