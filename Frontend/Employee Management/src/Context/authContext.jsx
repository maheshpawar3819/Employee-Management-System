import React, { useContext, useState } from "react";

//create context
const userContext = useContext();

const authContext = ({ children }) => {
  const [user, setUser] = useState(null);

  //login function
  const login = () => {};

  //logout function
  const logout = () => {};

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);
export default authContext;
