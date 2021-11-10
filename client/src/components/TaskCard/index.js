import React from "react";

//Styles
import { Container } from "./styles";

//Main Function
function TaskCard(props) {
  return (
    <Container>
      {props.title}
    </Container>
  );
}

export default TaskCard;