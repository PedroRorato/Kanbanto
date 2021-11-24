import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Container } from "./styles";

//Main Function
const Header = () => {
  return (
    <Container>
      <h1>Kanbanto</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </Container>
  );
};



export default Header;