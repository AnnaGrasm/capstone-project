import {Routes, Route} from 'react-router-dom';

import ChairList from './component/ChairList/ChairList';
import useItems from './hooks/useItems';
import Home from './pages/Home';
import SplashScreen from './pages/SplashScreen';

export default function App() {
  const {toggleDescription, likedChairs, toggleLike, chairs, showDescription} = useItems();

  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
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
