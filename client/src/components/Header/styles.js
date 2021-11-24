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


`;