import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

//Context
import { useAuth } from "../../contexts/AuthProvider";

//Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";

//Styles
import { Container, CenteredLinks } from "./styles";

//Main
function LoginScreen() {
	const { login } = useAuth();

	const {
		formState: { errors },
		control,
		handleSubmit,
	} = useForm();

	const loginHandler = async (data) => {
		try {
			await login(data);
			console.log("Login realizado com sucesso!");
		} catch (error) {
			console.log("erro:", error);
		}
	};

	return (
		<Container>
			<Card>
				<header>
					<h1>Login</h1>
				</header>
				<Form onSubmit={handleSubmit(loginHandler)}>
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

					<Button name="Sign In" type="submit" />
				</Form>

				<CenteredLinks>
					{/* <div><Link to="/password">Forgot password?</Link></div> */}
					<div>New to Kanbanto? <Link to="/register">Register</Link></div>
				</CenteredLinks>

			</Card>
		</Container>
	);
}

export default LoginScreen;