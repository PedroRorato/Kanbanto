import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

//API
import { tasksArr } from "../../database/tasks";

//Components
import Column from "../../components/Column";

//Styles
import { Container, Menu, ColumnsContainer } from "./styles";

//Main Function
const BoardScreen = () => {
  // const {id} = useParams();
  const [tasks, setTasks] = useState({
    backlog: [],
    todo: [],
    inprogress: [],
    testing: [],
    done: []
  });

  // const [users, setUsers] = useState({});

  useEffect(() => {
    const taskMap = {
      backlog: [],
      todo: [],
      inprogress: [],
      testing: [],
      done: []
    };

    tasksArr.forEach(task => {
      taskMap[task.status].push(task);
    });
    console.log(taskMap);
    console.log(taskMap.backlog);
    setTasks(taskMap);
  }, []);

  console.log("tasks: ", tasks);

  return (
    <Container>
      <Menu>
        <h2>Nome do Board</h2>
      </Menu>
      <ColumnsContainer>
        <Column title="Backlog" list={tasks.backlog} />
        <Column title="To Do" list={tasks.todo} />
        <Column title="In Progress" list={tasks.inprogress} />
        <Column title="Testing" list={tasks.testing} />
        <Column title="Done" list={tasks.done} />
      </ColumnsContainer>
    </Container>
  );
};

export default BoardScreen;