import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//API
import api from "../services/api";

//Main
const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const { id } = useParams();

  //States
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  //Loader
  useEffect(async () => {
    const { data } = await api.get(`boards/${id}`);
    setBoard(data);
    setLoading(false);
  }, [id]);

  // const loginHandler = async ({ email, password }) => {
  //   const response = await api.post("login", { email, password });
  //   //Token e User
  //   const { token, sessionData } = response.data;
  //   //Armazena dados do user
  //   setUser(sessionData);
  //   //Armazena no Storage
  //   localStorage.setItem("@Kanbanto:token", token);
  //   localStorage.setItem("@Kanbanto:user", JSON.stringify(sessionData));
  // };

  // const logoutHandler = () => {
  //   //Limpa Storage
  //   localStorage.removeItem("@Kanbanto:token");
  //   localStorage.removeItem("@Kanbanto:user");
  //   setUser(null);
  // };

  const context = {
    board: board,
    // login: loginHandler,
    // logout: logoutHandler,
  };

  return (
    <BoardContext.Provider value={context}>
      {!loading && children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const boardContext = useContext(BoardContext);
  return boardContext;
};
