import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

//Context
import { useBoard } from "../../contexts/BoardProvider";

//Components
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";
import ModalList from "../ModalList";
import ModalSearchList from "../ModalSearchList";

//Styles
import { Container, ButtonsContainer } from "./styles";

//Main Function
function TaskCard({ taskData }) {
  //Context
  const {
    board, updateTask,
    addTaskLabel,
    removeTaskLabel,
    addTaskUser, removeTaskUser
  } = useBoard();

  //Form
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm();
  setValue("title", taskData.title);
  setValue("description", taskData.description);

  //States
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [labelSearchResults, setLabelSearchResults] = useState([]);
  const [userSearchResults, setUserSearchResults] = useState([]);

  //Handlers
  const updateHandler = async (data) => {
    data.taskId = taskData.id;
    await updateTask(data);
    setShowTaskModal(false);
  };
  const searchLabelHandler = (e) => {
    const search = e.target.value;
    if (search === "") {
      setLabelSearchResults([]);
      return;
    }
    const taskLabelsId = taskData.labels.map(user => user.id);
    const labels = board.labels.filter(label => {
      const lowerCaseName = label.name.toLowerCase();
      return (!taskLabelsId.includes(label.id) && lowerCaseName.includes(search));
    });
    setLabelSearchResults(labels);
  };
  const addLabelHandler = async (id) => {
    await addTaskLabel(taskData.id, id);
    setLabelSearchResults(prev => prev.filter(label => label.id !== id));
  };
  const removeLabelHandler = async (id) => {
    await removeTaskLabel(taskData.id, id);
  };
  const searchUserHandler = (e) => {
    const search = e.target.value;
    if (search === "") {
      setUserSearchResults([]);
      return;
    }
    const taskUsersId = taskData.users.map(user => user.id);
    const users = board.users.filter(user => {
      const lowerCaseName = user.name.toLowerCase();
      const emailUsername = user.email.split("@")[0];
      return (
        !taskUsersId.includes(user.id) &&
        (lowerCaseName.includes(search) || emailUsername.includes(search))
      );
    });
    setUserSearchResults(users);
  };
  const addUserHandler = async (id) => {
    await addTaskUser(taskData.id, id);
    setUserSearchResults(prev => prev.filter(user => user.id !== id));
  };
  const removeUserHandler = async (id) => {
    await removeTaskUser(taskData.id, id);
  };


  return (
    <>
      <Modal
        title="Update Task"
        display={showTaskModal}
        closeModal={() => setShowTaskModal(false)}
      >
        <Form onSubmit={handleSubmit(updateHandler)}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                error={errors.title}
                errorMessage="title is required"
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
          <Button name="Update Task" type="submit" />
        </Form>
        <ButtonsContainer>
          <Button name="Labels" onClick={() => setShowLabelModal(true)} />
          <Button name="Users" onClick={() => setShowUsersModal(true)} />
        </ButtonsContainer>
      </Modal>

      <Modal
        title="Task Users"
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
          <ModalSearchList data={userSearchResults} addMethod={addUserHandler} />
        }

        {taskData.users.length !== 0 &&
          <ModalList
            title="Task Users"
            data={taskData.users}
            removeMethod={removeUserHandler}
          />
        }
      </Modal>

      <Modal
        title="Task Labels"
        display={showLabelModal}
        closeModal={() => setShowLabelModal(false)}
      >
        <Form>
          <Input
            id="users-search"
            name="Add"
            placeholder="Search user email..."
            onChange={searchLabelHandler}
          />
        </Form>

        {labelSearchResults.length === 0 ? <p>No results for the search...</p> :
          <ModalSearchList data={labelSearchResults} addMethod={addLabelHandler} />
        }

        {taskData.labels.length !== 0 &&
          <ModalList
            title="Task Labels"
            type="labels"
            data={taskData.labels}
            removeMethod={removeLabelHandler}
          />
        }
      </Modal>

      <Container onClick={() => setShowTaskModal(true)}>
        {taskData.title}
      </Container>
    </>
  );
}

export default TaskCard;