import React from "react";

import { Container } from "./styles";

function Input(props) {
  const labelTitle = props.title ? props.title : props.name;
  const inputProperties = { ...props };
  delete inputProperties.errorMessage;

  return (
    <Container>
      <label>{labelTitle}</label>
      <input {...inputProperties} />
      {props.error && <small>{props.errorMessage}</small>}
    </Container>
  );
}

export default Input;