import {useState} from 'react';
import styled from 'styled-components';

import ChairCard from './component/ChairCard/ChairCard';
import data from './data.json';

export default function App() {
const chairsData = data;
  const [showDescription, setShowDescription] = useState(false);

  /* function toggleDescription(id) {
  setChairsData(chairsData
      .map(item1 => ({...item1, showDescription: false}))
      .map(item2 => (item2._id === id ? {...item2, showDescription: !item2.showDescription} : item2)));
    
  }
  */

  const toggleDescription = index => {
    showDescription === index ? setShowDescription(false) : setShowDescription(index);
  };

  return (
    <AppContainer>
      <h1>Find your perfect Design Chair</h1>

      {chairsData.map((item, index) => (
        <ChairCard
          key={item._id}
          id={item._id}
          name={item.name}
          mainImg={item.imgUrl}
          description={item.description}
          toggleDescription={() => toggleDescription(index)}
          showDescription={showDescription}
          index={index}
        />
      ))}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--primary-light-color);

  h1{
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem;
  }
`;
