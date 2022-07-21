import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

export default function SplashScreen() {
  return (
    <SplashContainer>
      <StyledHeader>Find your Perfect Design chair</StyledHeader>

      <StyledImage src="./img/Logo2.svg" alt="logo" />

      <StyledLink to={`/home`} role="back to home page">
        <p>get started</p>
        <img src="./img/Arrow.svg" alt="" />
      </StyledLink>
    </SplashContainer>
  );
}

const pulse = keyframes`
0% {
    transform : scale(.9);
    
}
100% {
    transform : scale(1);
   
}  
`;

const SplashContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: var(--primary-color);
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 14rem;
  animation: ${pulse} 1s linear;
`;

const StyledHeader = styled.h3`
  font-size: 3.3rem;
  border-bottom: solid 3px black;
  margin: 2rem;
  line-height: 5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  text-decoration: none;
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  p {
    color: black;
    font-size: 1.6rem;
  }

  img {
    width: 2.8rem;
  }
`;
