import styled from 'styled-components';

import ButtonDescription from '../ButtonDescription/ButtonDescription';
import DesignerLink from '../DesignerLink/DesignerLink';

export default function ChairCard({
  name,
  mainImg,
  description,
  designerURL,
  designer,
  toggleDescription,
  id,
  showDescription,
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
    </ChairItem>
  );
}

const ChairItem = styled.section`
  display: flex;
  flex-flow: column wrap;
  margin: 1rem;
  gap: 1rem;
  border: solid 4px var(--secondary-color);
  background-color: var(--primary-color);
`;

const ChairHeader = styled.header`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ChairDetails = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 170px;
    height: auto;
    border-radius: 50%;
    border: 2px solid #f2f3f6;
    padding: 5px;
    aspect-ratio: 1 / 1;
  }
`;
