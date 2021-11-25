import styled from "styled-components";

export const Container = styled.div`
  background-color: #e1e1ea;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  gap: .75rem;
  min-width: 270px;
  width: 270px;
  padding: .5rem;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #333;
    text-transform: capitalize;
  }

  button {
    background-color: #28c98b;
    border-radius: .25rem;
    color: #fff;
    padding: .25rem .5rem;
  }

  button:hover {
    opacity: .7;
  }
`;