import {useState} from 'react';
import styled from 'styled-components';

import ChairCard from './component/ChairCard';
import data from './data.json';

export default function App() {
  const [chairsData, setChairsData] = useState(data);

  function toggleDescription(id) {
    setChairsData(chairsData.map(item => (item._id === id ? {...item, showDescription: !item.showDescription} : item)));
  }

  return (
    <AppContainer>
      <h1>Find your perfect Design Chair</h1>
      <MainContainer>
        {chairsData.map((item, index) => (
          <ChairCard
            key={item._id}
            id={item._id}
            name={item.name}
            mainImg={item.imgUrl}
            description={item.description}
            toggleDescription={toggleDescription}
            showDescription={item.showDescription}
          />
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
  height: min-content;
  background-color: var(--secondary-color);
  margin: 0;
`;
