import React from "react";

import { Container } from "./styles";

function Button({ name, type = "button", onClick }) {
  return (
    <Container type={type} onClick={onClick}>
      {name}
    </Container>
  );
}

export default Button;