import React, { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

//API
import api from "../services/api";

//Main
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const token = localStorage.getItem("@Kanbanto:token");
    if (token) {
      //Add Header
      api.defaults.headers.Authorization = `Bearer ${token}`;
      //Usar Token
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        logoutHandler();
        console.log("Token Expired!");
      } else {
        const userInfo = await localStorage.getItem("@Kanbanto:user");
        setUser(JSON.parse(userInfo));
      }
    }
    setLoading(false);
  }, []);

  const loginHandler = async ({ email, password }) => {
    const response = await api.post("login", { email, password });
    //Token e User
    const { token, sessionData } = response.data;
    //Armazena dados do user
    setUser(sessionData);
    //Armazena no Storage
    localStorage.setItem("@Kanbanto:token", token);
    localStorage.setItem("@Kanbanto:user", JSON.stringify(sessionData));
  };

  const logoutHandler = () => {
    //Limpa Storage
    localStorage.removeItem("@Kanbanto:token");
    localStorage.removeItem("@Kanbanto:user");
    setUser(null);
  };

  const context = {
    user: user,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
