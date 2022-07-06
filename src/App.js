import {useState} from 'react';
import styled from 'styled-components';

import ChairCard from './component/ChairCard/ChairCard';
import data from './data.json';

export default function App() {
  const chairsData = data;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };

  return (
    <AppContainer>
      <h1>Find your perfect Design Chair</h1>

      {chairsData.map(item => (
        <ChairCard
          key={item._id}
          id={item._id}
          name={item.name}
          mainImg={item.imgUrl}
          designerURL={item.designerURL}
          designer={item.designer}
          description={item.description}
          toggleDescription={() => toggleDescription(item._id)}
          showDescription={showDescription}
          inspirationImg1={item.imgUrlAlternative1}
          inspirationImg2={item.imgUrlAlternative2}
          inspirationImg3={item.imgUrlAlternative3}
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

  h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem;
  }
`;
