import React from "react";

//Context
// import { useBoard } from "../../contexts/BoardProvider";

//Components
import TaskCard from "../TaskCard";

//Styles
import { Container, TitleContainer } from "./styles";

const Column = ({ status }) => {
  const title = status.replaceAll("-", " ");


  const list = [
    {
      id: 1,
      name: "Cortar grama",
      status: "backlog",
    },
    {
      id: 2,
      name: "Pintar casa",
      status: "todo",
    },
    {
      id: 3,
      name: "Cortar lenha",
      status: "inprogress",
    },
    {
      id: 4,
      name: "Plantar árvores",
      status: "testing",
    }
  ];


  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        {status === "backlog" && <button>Create Task</button>}
      </TitleContainer>


      <ul>
        {list.map(task => <TaskCard key={task.id} title={task.name} />)}
      </ul>
    </Container>
  );
};

export default Column;