import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

//create context
const userContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //api call for verify user
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post(
            "http://localhost:8080/api/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response?.data?.user) {
            setUser(response?.data?.user);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        if (error.response && !error.response.data.error) {
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

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
    <userContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);
export default AuthContext;
