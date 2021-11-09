import React from "react";

//Components
import Header from "../Header";

//Styles
import { Container, Content } from "./styles";

//Main Function
const Layout = (props) => {
  return (
    <Container>
      <Header />
      <Content>
        {props.children}
      </Content>
    </Container>
  );
};

export default Layout;