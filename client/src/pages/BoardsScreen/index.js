import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";

//Services
import api from "../../services/api";

//Components
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Modal from "../../components/Modal";


//Styles
import { Container, CreateBoardButton, Card } from "./styles";

//Main Function
function BoardsScreen() {
  const [boards, setBoards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  useEffect(async () => {
    const { data } = await api.get("boards");
    console.log(data);
    setBoards(data);
  }, []);

  const createBoardHandler = async (data) => {
    console.log("data", data);
    try {
      //Remover depois de add o JWT
      data.adminId = 1;
      //
      await api.post("boards", data);
      alert("Empresa criada com sucesso!");
    } catch (error) {
      alert("Erro ao criar empresa!");
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        title="Create new Board"
        display={showModal}
        closeModal={() => setShowModal(false)}
      >
        <Form onSubmit={handleSubmit(createBoardHandler)}>
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
          <Button name="Create" type="submit" />
        </Form>
      </Modal>

      <Container>
        <h1>Boards</h1>
        <ul>
          <CreateBoardButton onClick={() => setShowModal(true)}>
            <BsPlusLg size={30} />
          </CreateBoardButton>
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
    </>
  );
}

export default BoardsScreen;