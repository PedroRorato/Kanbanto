import styled from "styled-components";

export const Container = styled.div`
  /* background:#333; */
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;

  h1 {
    margin: 2rem 0 1rem;
  }

  ul {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
`;

export const CreateBoardButton = styled.button`
  background-color: #ddd;
  border: 1px solid #ddd;
  border-radius: .25rem;
  height: 100px;
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  cursor: pointer;
  transition: .3s;

  &:hover {
    opacity: .6;
  }
`;

export const Card = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: .25rem;
  height: 100px;
  width: 280px;
  transition: .3s;

  &:hover {
    opacity: .6;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-decoration: none;
    padding: .5rem;
    height: 100%;
    width: 100%;

  }
`;