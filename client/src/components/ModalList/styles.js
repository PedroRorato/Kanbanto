import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: .5rem;

  ul {
    max-height: 150px;
    overflow: hidden;
    overflow-y: scroll;
  }

  h4 {
    background-color: #f0f0f5;
    padding: .25rem 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem .75rem;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span{
    background-color: ${props => props.color ? props.color : "black"};
    height: 10px;
    width: 10px;
    margin-right: .5rem;
  }

  h3 {
    font-weight: normal;
  }

  button{
    background-color: #dc3545;
    border-radius: .25rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
  }

  button:hover {
    opacity: .5;
  }
`;

export const UpdateButton = styled.button`
  background-color: #28c98b !important;
  margin-right: .5rem;
`;