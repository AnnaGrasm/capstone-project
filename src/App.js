import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import ChairList from './component/ChairList/ChairList';
import FooterNav from './component/FooterNav';
import chairs from './data.json';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

export default function App() {
  const [showDescription, setShowDescription] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  // const [favoriteChair, setFavoriteChair] = useState([])

  const [chairsData, setChairsData] = useState(chairs);

  //This function shows a discription text for one card. If a description text for another card clicked, the first one will close automatically !
  const toggleDescription = id => {
    showDescription === id ? setShowDescription(false) : setShowDescription(id);
  };

  function toggleLike(id) {

    const index = chairsData.findIndex(chair => chair._id === id);
    const newFavorite = chairsData.find(chair=> chair._id === id);
    const tempFavorites = [
      ...chairsData.slice(0, index),
      {...newFavorite, isLiked: !newFavorite.isLiked},
      ...chairsData.slice(index + 1),
    ];
setChairsData(tempFavorites)
  }


  console.log(chairsData);

  return (
    <>
      <FooterNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chairs/:name"
          element={
            <ChairList
              chairsData={chairsData}
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
