import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #f0f0f5;
    color: #333;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: .3s;
  }
`;