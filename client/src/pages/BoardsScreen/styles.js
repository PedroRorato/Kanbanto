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
    /* background:#ddd; */
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
`;

export const Button = styled.button`
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
`;

export const Card = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: .25rem;
  height: 100px;
  width: 280px;



  a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: .5rem;
    height: 100%;
    width: 100%;
  }
`;