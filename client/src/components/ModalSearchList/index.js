import React from "react";
import { FaPlus } from "react-icons/fa";

import { Container, ListItem } from "./styles";

function ModalSearchList({ data, type, addMethod }) {
  return (
    <Container>
      {data.map(item => (
        <ListItem key={item.id} color={item.color}>
          {/* Refactor first div */}
          <div>
            {type === "labels" && <span></span>}
            <h3>{item.name} {type === "users" && <small>({item.email})</small>}</h3>
          </div>

          <div>
            <button onClick={() => addMethod(item.id)}><FaPlus /></button>
          </div>
        </ListItem>
      ))}
    </Container>
  );
}

export default ModalSearchList;