import React from "react";

import { Container } from "./styles";

function Form({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Form;