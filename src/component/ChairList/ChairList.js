import {AiOutlineLeft} from 'react-icons/ai';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../ChairCard/ChairCard';
import FooterNav from '../FooterNav';

export default function ChairList({chairs, toggleDescription, showDescription, toggleLike}) {
  const {name} = useParams();
  const navigate = useNavigate();

  const filteredChairs = name ? chairs.filter(chair => name === chair.style) : chairs;

  return (
    <ChairContainer>
      <HeadingContainer>
        <button onClick={() => navigate(-1)}>
          <StyledBackButton />
        </button>
        <h1>{name ? `${name}` : 'Favorite'} Chairs</h1>
        <StyledLogo src="../icons/Logo2.svg" alt="logo" />
      </HeadingContainer>

      {!filteredChairs.length ? (
        <StyledEmptyPage>
          <h2>OH!</h2>
          <p>You have no favorite chair yet</p>
        </StyledEmptyPage>
      ) : (
        filteredChairs.map(chair => (
          <ChairCard
            chair={chair}
            key={chair._id}
            toggleDescription={() => toggleDescription(chair._id)}
            showDescription={showDescription}
            toggleLike={toggleLike}
          />
        ))
      )}
      <FooterNav />
    </ChairContainer>
  );
}
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }

  button {
    background-color: transparent;
    border: none;
  }

  @media (min-width: 667px) {
    width: 90%;
    
  }

`;
const StyledBackButton = styled(AiOutlineLeft)`
  font-size: 1.7rem;
`;
const StyledLogo = styled.img`
  width: 4rem;
`;

const StyledEmptyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-size: 2rem;
    font-weight: 700; 
  }
  p{
    font-size: 1.5rem;
    font-weight: 700; 
  }
`

const ChairContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background-color: var(--primary-light-color);

  @media (min-width: 667px) {
    width: 90%;
    margin-bottom: 0;
  }
`;
