import React from "react";
import { FaTimes, FaUserShield } from "react-icons/fa";

import { Container, ListItem, UpdateButton } from "./styles";

function ModalList({ title, data, type, removeMethod, updateMethod, adminId }) {
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

            {item.id === adminId ? <FaUserShield size={22} /> :
              <div>
                {updateMethod &&
                  <UpdateButton onClick={() => updateMethod(item.id)}>
                    <FaUserShield />
                  </UpdateButton>
                }
                <button onClick={() => removeMethod(item.id)}><FaTimes /></button>
              </div>
            }
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}

export default ModalList;