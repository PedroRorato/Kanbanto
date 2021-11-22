import React from "react";

import { Container } from "./styles";

function Input(props) {
  const labelTitle = props.title ? props.title : props.name;

  return (
    <Container>
      <label>{labelTitle}</label>
      <input {...props} />
    </Container>
  );
}

export default Input;