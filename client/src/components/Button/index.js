import React from "react";

import { Container } from "./styles";

function Button({ name, type = "button", color = "#28c98b", onClick }) {
	return (
		<Container type={type} color={color} onClick={onClick}>
			{name}
		</Container>
	);
}

export default Button;