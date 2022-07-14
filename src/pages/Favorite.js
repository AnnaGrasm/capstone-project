import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../component/ChairCard/ChairCard';



export default function Favorite({favoriteChair, chairsData, isLiked}) {
    const {like} = useParams();
    let navigate = useNavigate();
    

  return (
     


    <HeadingContainer>
      
        
        <h1> chairs</h1>
    

     

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