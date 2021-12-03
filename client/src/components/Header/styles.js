import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom:1px solid #ccc;
  display: flex;
  padding: .5rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: ${props => props.show ? "flex" : "none"};
  align-items: center;

  a {
    color: #333;
    font-size: 16px;
    padding: .75rem 0 .75rem 1rem;
    text-decoration: none;
  }

  a:hover {
    opacity: .7;
    transition: .3s;
  }

  button {
    background-color: #222;
    border-radius: .25rem;
    color: #fff;
    margin-left: 1rem;
    padding: .5rem .75rem;
  }

  button:hover {
    opacity: .7;
  }

  @media only screen and (max-width: 575px) {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    flex-direction: column;

    padding-bottom: .5rem;
    position: absolute;
    left: 0;
    top: 54px;
    width: 100vw;
    z-index: 100;

    li {
      border-bottom: 1px solid #ccc;
      height: 50px;
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    li a {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    button {
      margin-top: .5rem
    }
  }
`;

export const MenuButton = styled.button`
  background-color: #222;
  border-radius: .25rem;
  color: #fff;
  display: none;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;

  &:hover {
    opacity: .7;
  }

  @media only screen and (max-width: 576px) {
    display: flex;
  }

`;