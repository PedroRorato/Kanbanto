import React from "react";
import { FaTimes } from "react-icons/fa";

import { Container, ListItem } from "./styles";

function ModalList({ title, data, type, removeMethod, updateMethod }) {
  return (
    <Container>
      <h4>{title}</h4>
      <ul>
        {data.map(item => (
          <ListItem key={item.id} color={item.color}>
            {/* Refactor first div */}
            <div>
              {type === "labels" && <span></span>}
              <h3>{item.name} {type === "users" && <small>({item.email})</small>}</h3>
            </div>
            <div>
              {updateMethod &&
                <button onClick={() => removeMethod(item.id)}><FaTimes /></button>
              }
              <button onClick={() => removeMethod(item.id)}><FaTimes /></button>
            </div>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}

export default ModalList;