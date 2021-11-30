import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

//Context
import { useAuth } from "../../contexts/AuthProvider";

//Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

//Styles
import { Container, ExtraButtonsContainer } from "./styles";

function SettingsScreen() {
  //Context
  const { user, updateProfile, changePassword } = useAuth();

  //State
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  //Form
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm();
  setValue("name", user.name);
  setValue("email", user.email);
  setValue("initials", user.initials);

  //Handlers
  const updateProfileHandler = async (data) => {
    await updateProfile(data);
  };
  const changePasswordHandler = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;
    console.log();
    if (password !== confirmPassword) {
      alert("Different passwords!");
      return;
    }
    await changePassword(password);
    setShowPasswordModal(false);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <>
      <Modal
        title="Change Password"
        display={showPasswordModal}
        closeModal={() => setShowPasswordModal(false)}
      >
        <Form onSubmit={changePasswordHandler}>
          <Input
            id="password"
            name="password"
            title="New Password"
            type="password"
          />

          <Input
            id="confirm-password"
            name="confirm-password"
            title="Confirm Password"
            type="password"
          />

          <Button name="Change Password" type="submit" />
        </Form>
      </Modal>

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

            <Controller
              name="initials"
              control={control}
              rules={{ required: true, maxLength: 3 }}
              render={({ field }) => (
                <Input
                  error={errors.initials}
                  errorMessage="Initials are required. Must be 2 characters."
                  {...field} />
              )}
            />

            <Button name="Update Profile" type="submit" />
          </Form>

          <ExtraButtonsContainer>
            <Button name="Change Password" onClick={() => setShowPasswordModal(true)} />
          </ExtraButtonsContainer>

        </Card>
      </Container>
    </>
  );
}

export default SettingsScreen;