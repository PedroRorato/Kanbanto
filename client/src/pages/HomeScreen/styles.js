import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;

  h1 {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
	margin-top: 2rem;
  padding: .5rem;
	background-color: #555;
	border: 3px solid white;
	border-radius: .5rem;
	max-width: 1440px;


  img {
		border-radius: .25rem;
    width: 100%;
  }
`;