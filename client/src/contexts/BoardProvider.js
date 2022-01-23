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
	const [filteredTasks, setFilteredTasks] = useState([]);

	//Loader
	useEffect(async () => {
		const { data } = await api.get(`boards/${id}`);
		setBoard(data);
		setFilteredTasks(data.tasks);
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
	const addUserHandler = async (userId) => {
		try {
			await api.post(`boards/${id}/users`, { userId });
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const removeUserHandler = async (userId) => {
		try {
			await api.delete(`boards/${id}/users/${userId}`);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const createTaskHandler = async (data) => {
		try {
			await api.post(`boards/${id}/tasks`, data);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const updateTaskHandler = async (data) => {
		try {
			await api.put(`tasks/${data.taskId}`, data);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const deleteTaskHandler = async (taskId) => {
		try {
			await api.delete(`tasks/${taskId}`);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const addTaskLabelHandler = async (taskId, labelId) => {
		try {
			await api.post(`tasks/${taskId}/labels`, { labelId });
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const removeTaskLabelHandler = async (taskId, userId) => {
		try {
			await api.delete(`tasks/${taskId}/labels/${userId}`);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const addTaskUserHandler = async (taskId, userId) => {
		try {
			await api.post(`tasks/${taskId}/users`, { userId });
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const removeTaskUserHandler = async (taskId, userId) => {
		try {
			await api.delete(`tasks/${taskId}/users/${userId}`);
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const changeAdminHandler = async (adminId) => {
		try {
			await api.patch(`boards/${id}/admin`, { adminId });
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};
	const filterTasksHandler = (labelId, userId) => {
		let filteredTasksArr = board.tasks;
		if (labelId !== "all") {
			let newArr = [];
			for (let i = 0; i < filteredTasksArr.length; i++) {
				const task = filteredTasksArr[i];
				for (let j = 0; j < task.labels.length; j++) {
					const label = task.labels[j];
					if (label.id == labelId) newArr.push(task);
				}
			}
			filteredTasksArr = newArr;
		}
		if (userId !== "all") {
			let newArr = [];
			for (let i = 0; i < filteredTasksArr.length; i++) {
				const task = filteredTasksArr[i];
				for (let j = 0; j < task.users.length; j++) {
					const user = task.users[j];
					if (user.id == userId) newArr.push(task);
				}
			}
			filteredTasksArr = newArr;
		}
		setFilteredTasks(filteredTasksArr);
	};
	const changeTaskStatusHandler = async (taskId, status) => {
		try {
			await api.put(`tasks/${taskId}`, { status });
			setReload(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	};

	const context = {
		board: board,
		filteredTasks: filteredTasks,
		filterTasks: filterTasksHandler,
		updateBoard: updateBoardHandler,
		addLabel: addLabelHandler,
		removeLabel: removeLabelHandler,
		addUser: addUserHandler,
		removeUser: removeUserHandler,
		createTask: createTaskHandler,
		updateTask: updateTaskHandler,
		deleteTask: deleteTaskHandler,
		addTaskLabel: addTaskLabelHandler,
		removeTaskLabel: removeTaskLabelHandler,
		addTaskUser: addTaskUserHandler,
		removeTaskUser: removeTaskUserHandler,
		changeAdmin: changeAdminHandler,
		changeTaskStatus: changeTaskStatusHandler
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
