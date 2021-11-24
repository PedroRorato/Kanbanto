import styled from "styled-components";

export const Container = styled.div`
  background-color: #d1d1e0;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  min-width: 270px;
  width: 270px;
  padding: .5rem;

  h3 {
    color: #333;
    padding-bottom: .75rem;
  }

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
`;