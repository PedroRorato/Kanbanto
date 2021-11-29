import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

//Context
import { useBoard } from "../../contexts/BoardProvider";

//Components
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../Modal";

//Styles
import { Container } from "./styles";

//Main Function
function TaskCard({ taskData }) {
  //Context
  const { updateTask } = useBoard();

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
  const [showModal, setShowModal] = useState(false);

  //Handlers
  const updateHandler = async (data) => {
    data.taskId = taskData.id;
    await updateTask(data);
    setShowModal(false);
  };

  return (
    <>
      <Modal
        title="Update Task"
        display={showModal}
        closeModal={() => setShowModal(false)}
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
      </Modal>

      <Container onClick={() => setShowModal(true)}>
        {taskData.title}
      </Container>
    </>
  );
}

export default TaskCard;