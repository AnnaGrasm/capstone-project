import styled from 'styled-components';

import ButtonDescription from '../ButtonDescription/ButtonDescription';

export default function ChairCard({name, mainImg, description, toggleDescription, id, showDescription, index}) {
  return (
    <ChairItem role="chair-item">
      <ChairHeader>{name}</ChairHeader>
      <ChairDetails>
        <img src={mainImg} alt={name} />
        <div>
          <ButtonDescription
            toggleDescription={toggleDescription}
            showDescription={showDescription}
            name={name}
            index={index}
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
  border: solid 4px var(--secondary-color);
  margin: 1rem;
  background-color: var(--primary-color);
`;

const ChairHeader = styled.header`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem;
`;

const ChairDetails = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #f2f3f6;
    padding: 5px;
  }
`;


