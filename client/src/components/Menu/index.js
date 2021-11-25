import React from "react";
import { FaEdit, FaTicketAlt, FaPlus, FaUsers } from "react-icons/fa";


//Context
import { useBoard } from "../../contexts/BoardProvider";

//Styles
import { Container, BoardInfo, Filters, SelectCreatorGroup } from "./styles";

//Main
function Menu() {
  const { board } = useBoard();

  return (
    <Container>
      <BoardInfo>
        <h2>{board.name}</h2>
        <button><FaEdit size={15} /></button>
      </BoardInfo>

      <Filters>
        <SelectCreatorGroup>
          <div><FaTicketAlt size={20} /></div>
          <select>
            <option value="all">ALL</option>
            <option value="1">Frontend</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button><FaPlus size={15} /></button>
        </SelectCreatorGroup>

        <SelectCreatorGroup>
          <div><FaUsers size={22} /></div>
          <select>
            <option value="all">ALL</option>
            <option value="1">Pedro Berleze Rorato</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button><FaPlus size={15} /></button>
        </SelectCreatorGroup>
      </Filters>

    </Container>
  );
}

export default Menu;