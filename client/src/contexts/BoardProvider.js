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
  const [reload, setReload] = useState(0);

  //Loader
  useEffect(async () => {
    const { data } = await api.get(`boards/${id}`);
    setBoard(data);
    setLoading(false);
  }, [id, reload]);

  //Handlers
  const updateBoardHandler = async (data) => {
    try {
      await api.put(`boards/${id}`, data);
      setReload(prev => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const addLabelHandler = async (data) => {
    try {
      await api.post(`boards/${id}/labels`, data);
      setReload(prev => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const removeLabelHandler = async (id) => {
    try {
      await api.delete(`labels/${id}`);
      setReload(prev => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    board: board,
    updateBoard: updateBoardHandler,
    addLabel: addLabelHandler,
    removeLabel: removeLabelHandler
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
