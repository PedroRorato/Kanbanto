import React from "react";
import { BsXLg } from "react-icons/bs";

//Styles
import { Container, Background, Card } from "./styles";

function Modal({ title, display, closeModal, children }) {

  const displayStatus = display ? "flex" : "none";

  return (
    <Container display={displayStatus}>
      <Background onClick={closeModal} />
      <Card>
        <header>
          <h2>{title}</h2>
          <button onClick={closeModal}><BsXLg size={20} /></button>
        </header>
        <div>
          {children}
        </div>
      </Card>
    </Container>
  );
}

export default Modal;