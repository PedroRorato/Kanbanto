import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

//API
import api from "../../services/api";

//Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";

//Styles
import { Container, CenteredLinks } from "./styles";

//Main
function RegisterScreen() {
  let history = useHistory();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const registerHandler = async (data) => {
    try {
      const response = await api.post("register", data);
      console.log("response: ", response);
      history.push("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      <Card>
        <header>
          <h1>Register</h1>
        </header>
        <Form onSubmit={handleSubmit(registerHandler)}>
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
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                error={errors.password}
                errorMessage="Password is required"
                type="password"
                {...field} />
            )}
          />

          <Button name="Register" type="submit" />
        </Form>

        <CenteredLinks>
          {/* <div><Link to="/password">Forgot password?</Link></div> */}
          <div>Already registered? <Link to="/login">Login</Link></div>
        </CenteredLinks>

      </Card>
    </Container>
  );
}

export default RegisterScreen;