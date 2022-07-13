import {MdArrowBackIos} from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../ChairCard/ChairCard';

export default function ChairList({chairsData, toggleDescription, showDescription, setFavoriteChair}) {
  const {name} = useParams();
  let navigate = useNavigate();

  return (
    <ChairContainer>
      <HeadingContainer>
        <button onClick={() => navigate('/')}>
          <StyledBackButtonIcon />
        </button>
        <h1>{name} chairs</h1>
      </HeadingContainer>

      {chairsData
        .filter(chair => name === chair.style)
        .map(chair => (
          <ChairCard
            chair={chair}
            key={chair._id}
            toggleDescription={() => toggleDescription(chair._id)}
            showDescription={showDescription}
            setFavoriteChair={setFavoriteChair}
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
`;

const StyledBackButtonIcon = styled(MdArrowBackIos)`
  font-size: 2rem;
`;
