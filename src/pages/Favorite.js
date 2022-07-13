import styled from 'styled-components';

export default function Favorite({likePage}) {

  return (
     
     

    <HeadingContainer>
       <h1>{likePage}</h1> 
    </HeadingContainer>
   
   
  )
}
const HeadingContainer = styled.div`
  display: flex;
  margin: auto;
  width: 90vw;

  h1 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }
  
`;