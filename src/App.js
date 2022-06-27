import { useState } from 'react';
import styled from 'styled-components';

import ChairList from './component/ChairList';
import data from './data.json';


export default function App() {

  const [imageError, setImageError] = useState(false);


  return (
    <AppContainer>
      <h1>Find your perfect Design Chair</h1>
      <MainContainer>
        {data.map(item => (
          <ChairList key={item._id} name={item.name} mainImg={item.imgUrl} imageError={imageError} setImageError={setImageError} />
        ))}
      </MainContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  
`;

const MainContainer = styled.div`
  max-width: 80%;
  height: min-content;
  background-color: var(--secondary-color);
  
  
`;

