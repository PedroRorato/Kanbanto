import React from "react";

//Components
import TaskCard from "../TaskCard";

//Styles
import { Container } from "./styles";

const Column = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <ul>
        <TaskCard />
        <TaskCard />
      </ul>
    </Container>
  );
};

export default Column;