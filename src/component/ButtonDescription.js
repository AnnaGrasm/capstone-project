import styled from 'styled-components';

export function ButtonDescription({toggleDescription, showDescription, id}) {
  return (
    <Button onClick={() => toggleDescription(id)}>{showDescription ? 'Hide Description' : 'Show Description'}
    </Button>
    
  )
}

const Button = styled.button `
    border: none;
   border-radius: .8rem;
   padding: .5rem;
   background-color: var(--primary-color);
   font-weight: 800;
  
`

