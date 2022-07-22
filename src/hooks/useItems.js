import {useState, useEffect} from 'react';

import chairsData from '../data.json';
import {setToLocal, getFromLocal} from '../lib/localStorage.js';



export default function useItems() {

    const [showDescription, setShowDescription] = useState(false);
    const [chairs, setChairs] = useState(getFromLocal('chairs') ?? chairsData);
  
    useEffect(() => setToLocal('chairs', chairs), [chairs]);
  
    //This function shows a discription text for one card. If a description text for another card clicked, the first one will close automatically !
    const toggleDescription = id => {
      showDescription === id ? setShowDescription(false) : setShowDescription(id);
    };
  
    const likedChairs = chairs.filter(chair => chair.isLiked );
  
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
    return {
        toggleDescription,
        likedChairs,
        toggleLike,
        chairs,
        showDescription
      }
}


