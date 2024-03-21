import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [userid, setUserId] = useState(null);


  useEffect(()=>{
    const fetchDataFromLocalStorage = () => {
      const userNameLS = localStorage.getItem('usernameLogin');
      const userIdLS = localStorage.getItem('userIdLogin');
      
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
