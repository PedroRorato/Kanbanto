import React from "react";

import { Container } from "./styles";

function Form({ children, onSubmit }) {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  );
}

export default Form;