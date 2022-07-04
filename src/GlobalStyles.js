import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  :root {
    --primary-color: #b4a7a7;
    --primary-light-color: #ebe8e8;
    --secondary-color: #3e0c09;
    --secondary-light-color: #b7d1b5;
    --third-color: #0a6004;

   
  }
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.125rem;

    font-family: 'Abril Fatface', cursive;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
