import {useState} from 'react';
import styled from 'styled-components';


import ButtonDescription from '../ButtonDescription/ButtonDescription';
import ButtonLike from '../ButtonLike/ButtonLike';
import DesignerLink from '../DesignerLink/DesignerLink';
import InspirationImg from '../InspirationImg/InspirationImg';

export default function ChairCard({chair, toggleDescription, showDescription, setFavoriteChair}) {
  const [isLiked, setIsLiked] = useState(false);
  
   
  const {
    name,
    designerURL,
    description,
    designer,
    imgUrl,
    _id,
    imgUrlAlternative1,
    imgUrlAlternative2,
    imgUrlAlternative3,
  } = chair;

  function toggleLike() {
    setIsLiked(!isLiked);
    setFavoriteChair({...chair})
  }



  return (
    <ChairItem role="chair-item">
      <ChairHeader>{name}</ChairHeader>
      <ButtonLike toggleLike={toggleLike} isLiked={isLiked}/>
      <DesignerLink designerURL={designerURL} designer={designer} />
      <ChairDetails>
        <img src={imgUrl} alt={name} />

        <div>
          <ButtonDescription
            toggleDescription={toggleDescription}
            showDescription={showDescription}
            name={name}
            id={_id}
            description={description}
          ></ButtonDescription>
        </div>
      </ChairDetails>
      <InspirationImg
        inspirationImg1={imgUrlAlternative1}
        inspirationImg2={imgUrlAlternative2}
        inspirationImg3={imgUrlAlternative3}
      />
    </ChairItem>
  );
}

const ChairItem = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 90vw;
  position: relative;
  border: solid 4px var(--secondary-color);
  background-color: var(--primary-color);
`;

const ChairHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 1rem;
  color: var(--secondary-color);
`;

const ChairDetails = styled.article`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 15rem;
    height: auto;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    padding: 1rem;
  }
`;
