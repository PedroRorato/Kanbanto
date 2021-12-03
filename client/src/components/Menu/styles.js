import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1445px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

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

  h2 {
    max-width: 234px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    margin-left: .5rem;
    border-radius: .25rem;
  }

  @media only screen and (max-width: 575px) {
    h2 {
      max-width: 190px;
    }
  }
`;

export const FilterModal = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding:1rem 0;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const FilterButton = styled.button`
  display: none !important;
  border-radius: .25rem;

  @media only screen and (max-width: 767px) {
    display: flex !important;
  }
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
    background-color: #28c98b;
    border-radius: 0 .25rem .25rem 0;
    color: #fff;
  }

  @media only screen and (max-width: 767px) {
    select {
      border: 1px solid #ccc;
      border-radius: .5rem 0 0 .5rem ;
      height: 45px;
      flex: 1;
      font-size: 16px;
    }

    button {
      border-radius: 0 .5rem .5rem 0;
      width: 45px;
    }
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