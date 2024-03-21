import React, { createContext, useState, useEffect } from "react";
import redis from "../redis/redis";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [userid, setUserId] = useState(null);


  useEffect(()=>{
    const fetchDataFromLocalStorage = async () => {
      const userNameLS = await redis.get('usernameLogin');
      const userIdLS = await redis.get('userIdLogin');
      
      if (userNameLS && userIdLS) {
        setUsername(userNameLS);
        setUserId(userIdLS);
      }
    };
    fetchDataFromLocalStorage();
  }, [])
  

  return (
    <UserContext.Provider
      value={{ username, setUsername, userid, setUserId }}
    >
      {children}
    </UserContext.Provider>
  );
};
