import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";


//Context
import { useBoard } from "../../contexts/BoardProvider";

//Components
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";
import TaskCard from "../TaskCard";

//Styles
import { Container, TitleContainer } from "./styles";

//Main
const Column = ({ status }) => {
  const title = status.replaceAll("-", " ");

  //Context
  const { board, createTask } = useBoard();
  const list = board.tasks.filter(task => task.status === status);

  //States
  const [showModal, setShowModal] = useState(false);

  //Form
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm();

  //Handlers
  const createTaskHandler = async (data) => {
    await createTask(data);
    setShowModal(false);
    setValue("title", "");
    setValue("description", "");
  };

  return (
    <>
      <Modal
        title="Create Task"
        display={showModal}
        closeModal={() => setShowModal(false)}
      >
        <Form onSubmit={handleSubmit(createTaskHandler)}>
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
          <Button name="Create Task" type="submit" />
        </Form>
      </Modal>

      <Container>
        <TitleContainer>
          <h3>{title}</h3>
          {status === "backlog" &&
            <button onClick={() => setShowModal(true)}>Create Task</button>
          }
        </TitleContainer>
        <ul>
          {list.map(task =>
            <TaskCard
              key={task.id}
              taskData={task}
            />
          )}
        </ul>
      </Container>
    </>
  );
};

export default Column;