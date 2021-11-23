import React from "react";

import { Container } from "./styles";

function Input(props) {
  const labelTitle = props.title ? props.title : props.name;

  return (
    <Container>
      <label>{labelTitle}</label>
      <input {...props} />
      {props.error && <small>{props.errorMessage}</small>}
    </Container>
  );
}

export default Input;