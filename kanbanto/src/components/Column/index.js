import React from "react";

//Components
import TaskCard from "../TaskCard";

//Styles
import { Container } from "./styles";

const Column = ({ title, list }) => {
  console.log("Column List: ", list);

  return (
    <Container>
      <h3>{title}</h3>
      <ul>
        {list.map(task => <TaskCard key={task.id} title={task.name} />)}
      </ul>
    </Container>
  );
};

export default Column;