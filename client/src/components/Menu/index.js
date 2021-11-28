import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEdit, FaPlus, FaTicketAlt, FaTimes, FaUsers } from "react-icons/fa";

//Context
import { useBoard } from "../../contexts/BoardProvider";

//Components
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

//Styles
import { Container, BoardInfo, Filters, SelectCreatorGroup, List, ListItem, SearchList } from "./styles";

//Main
function Menu() {
  // #### Teste #### //
  const one = 1;


  //Context
  const { board, updateBoard, addLabel, removeLabel } = useBoard();
  console.log("Reload Board: ", board);

  //States
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);

  //Form
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm();
  setValue("name", board.name);
  setValue("description", board.description);

  //Handlers
  const updateBoardHandler = async (data) => {
    await updateBoard(data);
    setShowBoardModal(false);
  };
  const addLabelHandler = async (event) => {
    event.preventDefault();
    const inputs = event.target;
    const name = inputs["label-name"].value;
    if (name === "") return;
    const color = inputs["label-color"].value;
    await addLabel({ name, color });
    inputs["label-name"].value = "";
    inputs["label-color"].value = "";
  };
  const removeLabelHandler = async (id) => {
    await removeLabel(id);
  };
  // const addLabelHandler = async (data) => {
  //   console.log("addLabelHandler: ", data);
  // };
  // const addUserHandler = async (data) => {
  //   console.log("addUserHandler: ", data);
  // };

  return (
    <>
      <Modal
        title="Board Info"
        display={showBoardModal}
        closeModal={() => setShowBoardModal(false)}
      >
        <Form onSubmit={handleSubmit(updateBoardHandler)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                error={errors.name}
                errorMessage="Name is required"
                {...field} />
            )}
          />

          <Controller
            name="description"
            control={control}
            rules={{ required: false, maxLength: 200 }}
            render={({ field }) => (
              <Input
                error={errors.description}
                errorMessage="Accepts maximum of 200 characters"
                {...field} />
            )}
          />

          <Button name="Update Info" type="submit" />
        </Form>
      </Modal>

      <Modal
        title="Labels"
        display={showLabelsModal}
        closeModal={() => setShowLabelsModal(false)}
      >
        <Form onSubmit={addLabelHandler}>
          <Input name="name" id="label-name" />
          <Input type="color" name="color" id="label-color" />
          <Button name="Create Label" type="submit" />
        </Form>
        {board.labels.length !== 0 &&
          <List>
            <h4>Board Labels</h4>
            {board.labels.map(label => (
              <ListItem key={label.id} color={label.color}>
                <div>
                  <span></span>
                  <h3>{label.name}</h3>
                </div>
                <div>
                  <button onClick={() => removeLabelHandler(label.id)}><FaTimes /></button>
                </div>
              </ListItem>
            ))}
          </List>
        }
      </Modal>

      <Modal
        title="Board Users"
        display={showUsersModal}
        closeModal={() => setShowUsersModal(false)}
      >
        <Form onSubmit={addLabelHandler}>
          <Input name="Add" placeholder="Search user email..." id="users-search" />
        </Form>
        {one == 1 ? <p>No results for the search...</p> :
          <SearchList>
            {board.users.map(user => (
              <ListItem key={user.id} add>
                <div>
                  <h3>{user.name} <small>({user.email})</small></h3>
                </div>
                <div>
                  <button onClick={() => removeLabelHandler(user.id)}><FaPlus /></button>
                </div>
              </ListItem>
            ))}
          </SearchList>
        }

        <List>
          <h4>Board Users</h4>
          {board.users.map(user => (
            <ListItem key={user.id}>
              <div>
                <h3>{user.name} <small>({user.email})</small></h3>
              </div>
              <div>
                <button onClick={() => removeLabelHandler(user.id)}><FaTimes /></button>
              </div>
            </ListItem>
          ))}
        </List>
      </Modal>

      <Container>
        <BoardInfo>
          <h2>{board.name}</h2>
          <button onClick={() => setShowBoardModal(true)}>
            <FaEdit size={15} />
          </button>
        </BoardInfo>

        <Filters>
          <SelectCreatorGroup>
            <div><FaTicketAlt size={20} /></div>
            <select>
              <option value="all">ALL</option>
              {
                board.labels.map(label => (
                  <option key={label.id} value={label.id}>{label.name}</option>
                ))
              }
            </select>
            <button onClick={() => setShowLabelsModal(true)}>
              <FaEdit size={15} />
            </button>
          </SelectCreatorGroup>

          <SelectCreatorGroup>
            <div><FaUsers size={22} /></div>
            <select>
              <option value="all">ALL</option>
              {
                board.users.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))
              }
            </select>
            <button onClick={() => setShowUsersModal(true)}>
              <FaEdit size={15} />
            </button>
          </SelectCreatorGroup>
        </Filters>
      </Container>
    </>
  );
}

export default Menu;