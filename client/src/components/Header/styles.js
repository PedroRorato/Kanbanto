import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom:1px solid #ccc;
  display: flex;
  padding: .5rem 1rem;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
  }

  ul a {
    color: #333;
    font-size: 16px;
    padding: .75rem 0 .75rem 1rem;
  }

  ul a:hover {
    opacity: .7;
    transition: .3s;
  }

  ul button {
    background-color: #222;
    border: none;
    border-radius: .25rem;
    color: #fff;
    cursor: pointer;
    margin-left: 1rem;
    padding: .5rem .75rem;
    text-transform: uppercase;
    transition: .3s;
  }

  ul button:hover {
    opacity: .7;
  }
`;