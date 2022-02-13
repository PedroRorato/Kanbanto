import React from "react";

// Assets
import exemplo from "../../assets/img/exemplo.png";

// Styles
import { Container, ImageContainer } from "./styles";

function HomeScreen() {
	return (
		<Container>
			<h1>Organize seu projeto com Kanbanto</h1>
			<ImageContainer>
				<img src={exemplo} />
			</ImageContainer>
		</Container>
	);
}

export default HomeScreen;