import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ColumnsContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding: 0 1rem .5rem;
`;