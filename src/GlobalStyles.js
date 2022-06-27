import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
:root {
  --primary-color: #738b8c;
  --primary-light-color: #b8ddf4;
  --secondary-color: #acc7cd;
  --secondary-light-color: #e5d2eb;

}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
