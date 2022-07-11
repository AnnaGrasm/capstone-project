import {useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import ChairList from './component/ChairList/ChairList';
import chairsData from './data.json';
import Home from './pages/Home';

export default function App() {
  
  const [showDescription, setShowDescription] = useState(false);

  //This function shows a discription text for one card. If a description text for another card clicked, the first one will close automatically !
  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/:name"
          element={
            <ChairList chairsData={chairsData} showDescription={showDescription} toggleDescription={toggleDescription} />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
  background-color: var(--primary-light-color);
  position: relative;
`;
