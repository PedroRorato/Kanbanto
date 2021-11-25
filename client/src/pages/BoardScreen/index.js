import React from "react";

//Context
import { BoardProvider } from "../../contexts/BoardProvider";

//Components
import Column from "../../components/Column";
import Menu from "../../components/Menu";

//Styles
import { Container, ColumnsContainer } from "./styles";

//Main Function
const BoardScreen = () => {

  return (
    <BoardProvider>
      <Container>
        <Menu />
        <ColumnsContainer>
          <Column status="backlog" />
          <Column status="to-do" />
          <Column status="in-progress" />
          <Column status="testing" />
          <Column status="done" />
        </ColumnsContainer>
      </Container>
    </BoardProvider>
  );
};

export default BoardScreen;