import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 1460px) {
    align-items: center;
  }
`;

export const ColumnsContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  padding: 0 1rem .5rem;
`;