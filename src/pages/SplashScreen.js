import {Link} from 'react-router-dom';

export default function SplashScreen() {
  return (
    <div>
        <p>Find your Perfect Desing chair</p>
        <Link to={`/home`}>get started</Link>
        <img src="./sub" alt="" />
        
    </div>
  )
}
