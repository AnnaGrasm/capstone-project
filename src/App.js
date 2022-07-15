import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import ChairList from './component/ChairList/ChairList';
import FooterNav from './component/FooterNav';
import chairsData from './data.json';
import {setToLocal, getFromLocal} from './lib/localStorage.js';
import Home from './pages/Home';

export default function App() {
  const [showDescription, setShowDescription] = useState(false);
  const [chairs, setChairs] = useState(getFromLocal('chairs') ?? chairsData);

  useEffect(() => setToLocal('chairs', chairs), [chairs]);

  //This function shows a discription text for one card. If a description text for another card clicked, the first one will close automatically !
  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };

  const likedChairs = chairs.filter(chair => chair.isLiked);

  function toggleLike(id) {
    const index = chairs.findIndex(chair => chair._id === id);
    const newFavorite = chairs.find(chair => chair._id === id);
    const tempFavorites = [
      ...chairs.slice(0, index),
      {...newFavorite, isLiked: !newFavorite.isLiked},
      ...chairs.slice(index + 1),
    ];
    setChairs(tempFavorites);
  }

  return (
    <>
      <FooterNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chairs/:name"
          element={
            <ChairList
              chairs={chairs}
              showDescription={showDescription}
              toggleDescription={toggleDescription}
              toggleLike={toggleLike}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <ChairList
              chairs={likedChairs}
              showDescription={showDescription}
              toggleDescription={toggleDescription}
              toggleLike={toggleLike}
            />
          }
        />
      </Routes>
    </>
  );
}
