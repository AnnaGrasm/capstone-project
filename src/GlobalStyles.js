import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  :root {
    --primary-color: #b4a7a7;
    --primary-light-color: #ebe8e8;
    --secondary-color: #3e0c09;
    --secondary-light-color: #8d2c2c;
  }
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.5;
    font-family: 'Bebas Neue', cursive;
    background-color: var(--primary-light-color);
  }
`;
