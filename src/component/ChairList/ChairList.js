import {MdArrowBackIos} from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../ChairCard/ChairCard';

export default function ChairList({chairsData, toggleDescription, showDescription}) {
  const {name} = useParams();
  let navigate = useNavigate();

  return (
    <>
      <HeadingContainer>
        <button onClick={() => navigate('/')}>
          <MdArrowBackIos size={40} />
        </button>
        <h1>{name} chairs</h1>
      </HeadingContainer>
      <ChairContainer>
        {chairsData
          .filter(chair => name === chair.style)
          .map(chair => (
            <ChairCard
            chair={chair}
               key={chair._id}
               toggleDescription={() => toggleDescription(chair._id)}
               showDescription={showDescription}
            />
          ))}
      </ChairContainer>
    </>
  );
}
const HeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
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
  min-height: 100vh;
  margin-bottom: 2rem;
  background-color: var(--primary-light-color);
`;
