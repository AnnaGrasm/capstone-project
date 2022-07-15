import {MdArrowBackIos} from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../ChairCard/ChairCard';

export default function ChairList({chairs, toggleDescription, showDescription, setFavoriteChair, toggleLike}) {
  const {name} = useParams();
  let navigate = useNavigate();

  const filteredChairs = name ? chairs.filter(chair => name === chair.style) : chairs;

  return (
    <ChairContainer>
      <HeadingContainer>
        <button onClick={() => navigate('/')}>
          <StyledBackButtonIcon />
        </button>
        {name ? <h1>{name} chairs</h1> : <h1>Favorite Chairs</h1>}
      </HeadingContainer>

      {filteredChairs.map(chair => (
        <ChairCard
          chair={chair}
          key={chair._id}
          toggleDescription={() => toggleDescription(chair._id)}
          showDescription={showDescription}
          setFavoriteChair={setFavoriteChair}
          toggleLike={toggleLike}
        />
      ))}
    </ChairContainer>
  );
}
const HeadingContainer = styled.div`
  display: flex;
  margin: auto;
  width: 90vw;

  h1 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
  }

  button {
    background-color: transparent;
    border: none;
  }
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
  }
`;

const StyledBackButtonIcon = styled(MdArrowBackIos)`
  font-size: 2rem;
`;
