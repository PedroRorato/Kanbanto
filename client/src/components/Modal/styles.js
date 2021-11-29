import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: ${props => props.display};
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Background = styled.div`
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: .5rem;
  height: fit-content;
  padding: 1rem;
  min-width: 280px;
  max-width: 500px;
  flex: 1;
  z-index: 100;

  header {
    border-bottom: 1px solid #ddd;
    display: flex;
    padding-bottom: .75rem;
  }

  header h2{

    flex: 1;
  }

  header button {
    cursor: pointer;
    border: none;
    background: none;
    color: #888;
    transition: .3s;
  }

  header button:hover {
    color: #333;
    /* transition: .3s; */
  }

  p {
    padding-bottom: 1rem;
  }
`;