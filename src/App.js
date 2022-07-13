import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

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
    <Routes>
      <Route
        path="/:name"
        element={
          <ChairList chairsData={chairsData} showDescription={showDescription} toggleDescription={toggleDescription} />
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
