import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Heading>Find your perfect chair</Heading>
      <MainContainer>
        <StyledLink to={`./industrial`}>Industrial</StyledLink>
        <StyledLink to={`./scandinavian`}>Scandinavian</StyledLink>
        <StyledLink to={`./contemporary`}>Contemporary</StyledLink>
        <StyledLink to={`./mid-century-modern`}>Mid-Century Modern</StyledLink>
      </MainContainer>
    </>
  );
}

const Heading = styled.header`
  position: fixed;
  top: 0;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-template-rows: 10rem 10rem;
  justify-content: center;
  gap: 1rem;
  align-content: center;
`;
const StyledLink = styled(Link)`
  padding: 0.5rem;
  color: white;
  background: var(--primary-color);
  border: none;
  text-decoration: none;
`;
