import styled from 'styled-components';

import ButtonDescription from '../ButtonDescription/ButtonDescription';
import DesignerLink from '../DesignerLink/DesignerLink';
import InspirationImg from '../InspirationImg/InspirationImg';

export default function ChairCard({
  name,
  mainImg,
  description,
  designerURL,
  designer,
  toggleDescription,
  id,
  showDescription,
  inspirationImg1,
  inspirationImg2,
  inspirationImg3,
}) {
  return (


    <ChairItem role="chair-item">
      <ChairHeader>{name}</ChairHeader>
      <DesignerLink designerURL={designerURL} designer={designer} />
      <ChairDetails>
        <img src={mainImg} alt={name} />

        <div>
          <ButtonDescription
            toggleDescription={toggleDescription}
            showDescription={showDescription}
            name={name}
            id={id}
            description={description}
          ></ButtonDescription>
        </div>
      </ChairDetails>
      <InspirationImg
        inspirationImg1={inspirationImg1}
        inspirationImg2={inspirationImg2}
        inspirationImg3={inspirationImg3}
      />
    </ChairItem>
  );
}

const ChairItem = styled.section`
  display: flex;
  flex-flow: column wrap;
  border: solid 4px var(--secondary-color);
  background-color: var(--primary-color);
  width: 90vw;

  @media (min-width: 667px) {
    width: 90vw;
  }
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
