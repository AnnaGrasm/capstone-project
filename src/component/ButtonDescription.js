import styled from 'styled-components';

export function ButtonDescription() {
  return (
    <Button>Description</Button>
  )
}

const Button = styled.button `
    border: none;
   border-radius: 1rem;
   padding: 1rem;
   background-color: var(--primary-color);
`

