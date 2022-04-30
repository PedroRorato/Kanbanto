import styled from "styled-components";

export const Container = styled.button`
	background:firebrick;
  border-radius: .5rem;
  color: #fff;
  font-size: 16px;
  padding: 1rem;

  &:hover {
    opacity: .7;
  }

  & + button {
    margin-left: 1rem;
  }
`;