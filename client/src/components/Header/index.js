import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//Context
import { useAuth } from "../../contexts/AuthProvider";

//Styles
import { Container, List, MenuButton } from "./styles";

//Main Function
const Header = () => {
  const { innerWidth: width } = window;

  //Context
  const { user, logout } = useAuth();

  //State
  const [showMenu, setShowMenu] = useState(true);


  useEffect(() => {
    if (width < 576) {
      setShowMenu(false);
    }
  }, []);

  console.log(showMenu);

  return (
    <Container>
      <h1>Kanbanto</h1>
      {user ?
        <List show={showMenu}>
          <li><Link to="/boards">Boards</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <button onClick={logout}>Logout</button>
        </List> :
        <List show={showMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </List>
      }
      <MenuButton onClick={() => setShowMenu(prev => !prev)}><FaBars size={20} /></MenuButton>
    </Container>
  );
};



export default Header;