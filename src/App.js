import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import ChairMapping from './component/ChairMapping';
import data from './data.json';
import Home from './pages/Home';

export default function App() {
  const chairsData = data;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/:name"
          element={
            <ChairMapping chairsData={chairsData} showDescription={showDescription} toggleDescription={toggleDescription} />
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
`;
