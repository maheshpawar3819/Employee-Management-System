import React, { createContext, useContext, useState } from "react";

//create context
const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  //login function
  const login = (user) => {
    setUser(user);
  };

  //logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);
export default AuthContext;
