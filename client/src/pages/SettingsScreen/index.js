import React from "react";
import { useForm, Controller } from "react-hook-form";

//Context
import { useAuth } from "../../contexts/AuthProvider";

//Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";

//Styles
import { Container, ExtraButtonsContainer } from "./styles";

function SettingsScreen() {
  //Context
  const { user } = useAuth();

  //Form
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm();
  setValue("name", user.name);
  setValue("email", user.email);

  //Handlers
  const updateProfileHandler = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Card>
        <header>
          <h1>Profile Info</h1>
        </header>
        <Form onSubmit={handleSubmit(updateProfileHandler)}>
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
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                error={errors.email}
                errorMessage="Email is required"
                {...field} />
            )}
          />

          <Button name="Update Profile" type="submit" />
        </Form>

        <ExtraButtonsContainer>
          <Button name="Change Password" type="submit" />
        </ExtraButtonsContainer>

      </Card>
    </Container>
  );
}

export default SettingsScreen;