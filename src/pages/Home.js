import {Link} from 'react-router-dom';
import styled from 'styled-components';

import FooterNav from '../component/FooterNav';

export default function Home() {
  return (
    <HomeContainer>
      <StyledHeading>
        <h1>Choose your style</h1>
        <img src="../img/Logo2.svg" alt="logo" />
      </StyledHeading>
      <NavigationContainer>
        <StyledLink to={`/chairs/industrial`}>Industrial</StyledLink>
        <StyledLink to={`/chairs/scandinavian`}>Scandinavian</StyledLink>
        <StyledLink to={`/chairs/contemporary`}>Contemporary</StyledLink>
        <StyledLink to={`/chairs/mid-century-modern`}>Mid-Century Modern</StyledLink>
      </NavigationContainer>
      <FooterNav />
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
`;

export const StyledHeading = styled.div`
  display: flex;
  width: 90vw;
  justify-content: center;
  gap: 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  img {
    width: 3rem;
  }
`;
const NavigationContainer = styled.nav`
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-template-rows: 10rem 10rem;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const StyledLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  color: white;
  background: var(--primary-color);
  border: solid 3px var(--secondary-color);
`;
