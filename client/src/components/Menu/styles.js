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

export const SearchList = styled.ul`
  border: 1px solid #ccc;
  /* border-top: none; */
  border-radius: 0 0 .5rem .5rem;
  max-height: 185px;
  overflow: hidden;
  overflow-y: scroll;
  padding-top: .35rem;
  position: relative;
  top: -1.35rem;

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
    background-color: ${props => props.add ? "#28c98b" : "#dc3545"};
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