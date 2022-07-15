import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <Heading>Find your perfect chair</Heading>
      <NavigationContainer>
        <StyledLink to={`/chairs/industrial`}>Industrial</StyledLink>
        <StyledLink to={`/chairs/scandinavian`}>Scandinavian</StyledLink>
        <StyledLink to={`/chairs/contemporary`}>Contemporary</StyledLink>
        <StyledLink to={`/chairs/mid-century-modern`}>Mid-Century Modern</StyledLink>
      </NavigationContainer>
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

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
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
  border: none;
  text-decoration: none;
  font-size: 1.3rem;
  background: var(--primary-color);
  color: white;
`;
