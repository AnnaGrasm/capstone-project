import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import ChairList from './component/ChairList/ChairList';
import FooterNav from './component/FooterNav';
import chairsData from './data.json';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

export default function App() {
  const [showDescription, setShowDescription] = useState(false);
  const [favoriteChair, setFavoriteChair] = useState([])

  //This function shows a discription text for one card. If a description text for another card clicked, the first one will close automatically !
  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };
 console.log(favoriteChair)

  return (
    <>
    <FooterNav />
    <Routes>
      <Route
        path="/:name"
        element={
          <ChairList chairsData={chairsData} showDescription={showDescription} toggleDescription={toggleDescription} setFavoriteChair={setFavoriteChair} />
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite favoriteChair={favoriteChair} />} />
    </Routes>
    </>
  );
}
