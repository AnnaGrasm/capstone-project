import {MdArrowBackIos} from 'react-icons/md';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import ChairCard from '../ChairCard/ChairCard';

export default function ChairMapping({chairsData, toggleDescription, showDescription}) {
  const {name} = useParams();
  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <ChairContainer>
      <h1>{name} chairs</h1>
      <button onClick={handleClick}>
        <MdArrowBackIos size={30} />
      </button>
      {chairsData
        .filter(item => name === item.style)
        .map(item => (
          <ChairCard
            key={item._id}
            id={item._id}
            name={item.name}
            mainImg={item.imgUrl}
            designerURL={item.designerURL}
            designer={item.designer}
            description={item.description}
            toggleDescription={() => toggleDescription(item._id)}
            showDescription={showDescription}
            inspirationImg1={item.imgUrlAlternative1}
            inspirationImg2={item.imgUrlAlternative2}
            inspirationImg3={item.imgUrlAlternative3}
          />
        ))}
    </ChairContainer>
  );
}

const ChairContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
  background-color: var(--primary-light-color);
  

  h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem;
  }
  button{
    background-color: transparent;
   border: none;
   align-self: flex-start;
  }
`;
