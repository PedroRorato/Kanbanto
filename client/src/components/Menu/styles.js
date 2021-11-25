import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;

  button {
    background-color: #28c98b;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
    width: 28px;
  }

  button:hover {
    opacity: .5;
  }

`;

export const BoardInfo = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: .5rem;
    border-radius: .25rem;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SelectCreatorGroup = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    padding-right: .25rem;
    color: #555;
  }

  select {
    border: 1px solid #ccc;
    border-radius: .25rem 0 0 .25rem ;
    padding: .25rem;
    width: 80px;
  }

  button {
    border-radius: 0 .25rem .25rem 0;
  }

`;