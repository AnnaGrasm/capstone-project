import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Heading>Find your perfect chair</Heading>
      <MainContainer>
        <StyledLink to={`./industrial`}>Industrial</StyledLink>
        <StyledLink to={`./Scandinavian`}>Scandinavian</StyledLink>
        <StyledLink to={`./contemporary`}>Contemporary</StyledLink>
        <StyledLink to={`./mid-century`}>Mid-Century Modern</StyledLink>
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
  display: flex;
  flex-flow: column wrap;
`;
const StyledLink = styled(Link)`
  padding: 0.5rem;
  color: white;
  background: darkslategray;
  border: none;
  text-decoration: none;
`;
