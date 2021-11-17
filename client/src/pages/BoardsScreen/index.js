import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";


//Services
import api from "../../services/api";

//Styles
import { Container, Button, Card } from "./styles";

function BoardsScreen() {
  const [boards, setBoards] = useState([]);

  useEffect(async () => {
    const { data } = await api.get("boards");
    console.log(data);
    setBoards(data);
  }, []);

  const addBoardHandler = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <h1>Boards</h1>
      <ul>
        <Button onClick={addBoardHandler}>
          <BsPlusLg size={30} />
        </Button>
        {boards.length > 0 &&
          boards.map(board => (
            <Card key={board.id}>
              <Link to={`boards/${board.id}`}>
                <h2>{board.name}</h2>
              </Link>
            </Card>
          ))
        }
      </ul>
    </Container>
  );
}

export default BoardsScreen;