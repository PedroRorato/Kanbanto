import React from "react";

//Components
import Column from "../../components/Column";

//Styles
import { Container, Menu, ColumnsContainer } from "./styles";

//Main Function
const BoardScreen = () => {
  return (
    <Container>
      <Menu>
        <h2>Nome do Board</h2>
      </Menu>
      <ColumnsContainer>
        <Column title="Backlog" />
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Testing" />
        <Column title="Done" />
      </ColumnsContainer>
    </Container>
  );
};

export default BoardScreen;