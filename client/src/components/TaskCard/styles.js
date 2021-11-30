import styled from "styled-components";

export const Container = styled.li`
  background-color: #fff;
  border-radius: .25rem;
  cursor: pointer;
  padding: .5rem;
  transition: .3s;

  &:hover {
    opacity: .7;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
  }
`;