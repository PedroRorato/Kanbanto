import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaEdit, FaPlus, FaTicketAlt, FaUsers } from "react-icons/fa";

//API
import api from "../../services/api";

//Context
import { useBoard } from "../../contexts/BoardProvider";

//Components
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";
import ModalList from "../ModalList";

//Styles
import {
  Container, BoardInfo, Filters, SelectCreatorGroup, ListItem, SearchList
} from "./styles";

//Main
function Menu() {

  //Context
  const {
    board,
    updateBoard,
    addLabel,
    removeLabel,
    addUser,
    removeUser,
    changeAdmin,
    filterTasks
  } = useBoard();

  console.log(board);

  //States
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [filteredLabel, setFilteredLabel] = useState("all");
  const [filteredUser, setFilteredUser] = useState("all");

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
  const searchUserHandler = async (e) => {
    const search = e.target.value;
    if (search === "") {
      setUserSearchResults([]);
      return;
    }
    const { data } = await api.get("users", { params: { search } });
    const boardUsersId = board.users.map(user => user.id);
    const users = data.filter(user => !boardUsersId.includes(user.id));
    setUserSearchResults(users);
  };
  const addUserHandler = async (id) => {
    await addUser(id);
    setUserSearchResults(prev => prev.filter(user => user.id !== id));
  };
  const removeUserHandler = async (id) => {
    await removeUser(id);
  };
  const changeAdminHandler = async (id) => {
    await changeAdmin(id);
  };
  const selectLabelHandler = (e) => {
    setFilteredLabel(e.target.value);
    filterTasks(e.target.value, filteredUser);
  };
  const selectUserHandler = (e) => {
    setFilteredUser(e.target.value);
    filterTasks(filteredLabel, e.target.value);
  };

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
          <ModalList
            title="Board Labels"
            type="labels"
            data={board.labels}
            removeMethod={removeLabelHandler}
          />
        }
      </Modal>

      <Modal
        title="Board Users"
        display={showUsersModal}
        closeModal={() => setShowUsersModal(false)}
      >
        <Form>
          <Input
            id="users-search"
            name="Add"
            placeholder="Search user email..."
            onChange={searchUserHandler}
          />
        </Form>
        {userSearchResults.length === 0 ? <p>No results for the search...</p> :
          <SearchList>
            {userSearchResults.map(user => (
              <ListItem key={user.id} add>
                <div>
                  <h3>{user.name} <small>({user.email})</small></h3>
                </div>
                <div>
                  <button onClick={() => addUserHandler(user.id)}><FaPlus /></button>
                </div>
              </ListItem>
            ))}
          </SearchList>
        }

        <ModalList
          title="Board Users"
          type="users"
          data={board.users}
          removeMethod={removeUserHandler}
          updateMethod={changeAdminHandler}
          adminId={board.adminId}
        />

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
            <select onChange={selectLabelHandler} value={filteredLabel}>
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
            <select onChange={selectUserHandler} value={filteredUser}>
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