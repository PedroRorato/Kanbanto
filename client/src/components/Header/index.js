import React from "react";
import { Link } from "react-router-dom";

//Context
import { useAuth } from "../../contexts/AuthProvider";

//Styles
import { Container } from "./styles";

//Main Function
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <h1>Kanbanto</h1>
      {user ?
        <>
          <ul>
            <li><Link to="/boards">Boards</Link></li>
            <button onClick={logout}>Logout</button>
          </ul>
        </> :
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      }
    </Container>
  );
};



export default Header;