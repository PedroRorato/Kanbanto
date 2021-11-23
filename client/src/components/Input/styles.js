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
  }

  small {
    color: firebrick;
  }

`;