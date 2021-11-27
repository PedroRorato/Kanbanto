import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  label {
    padding-bottom: .5rem;
    text-transform: capitalize;
  }

  input {
    border: 1px solid #ccc;
    border-radius: .5rem;
    font-size: 16px;
    padding: .75rem;
    z-index: 1;
  }

  input[type=color] {
    height: 44px;
    width: 100%;
  }

  small {
    color: firebrick;
  }

`;