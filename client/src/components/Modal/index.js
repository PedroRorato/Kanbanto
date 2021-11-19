import React from "react";
import { BsXLg } from "react-icons/bs";

//Styles
import { Background, Container } from "./styles";

function Modal({ title, display, closeModal, children }) {

  const displayStatus = display ? "flex" : "none";

  return (
    <Background display={displayStatus} onClick={closeModal}>
      <Container>
        <header>
          <h2>{title}</h2>
          <button onClick={closeModal}><BsXLg size={20} /></button>
        </header>
        <div>
          {children}
        </div>
      </Container>
    </Background>
  );
}

export default Modal;