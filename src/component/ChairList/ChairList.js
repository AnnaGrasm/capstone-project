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
        <button onClick={() => navigate('/home')}>
          <StyledBackButton />
        </button>
        <h1>{name ? `${name}` : 'Favorite'} Chairs</h1>
        <StyledLogo src="../img/Logo2.svg" alt="logo" />
      </HeadingContainer>

      {filteredChairs.map(chair => (
        <ChairCard
          chair={chair}
          key={chair._id}
          toggleDescription={() => toggleDescription(chair._id)}
          showDescription={showDescription}
          toggleLike={toggleLike}
        />
      ))}
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
    max-width: 90%;
  }
`;
const StyledBackButton = styled(AiOutlineLeft)`
  font-size: 1.7rem;
  
`;
const StyledLogo = styled.img`
  width: 3rem;
`;

const ChairContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  background-color: var(--primary-light-color);

  @media (min-width: 600px) {
    width: 90vw;
    margin-bottom: 0;
  }
`;
