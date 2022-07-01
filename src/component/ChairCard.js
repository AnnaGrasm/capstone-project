import styled from 'styled-components';

import {ButtonDescription} from './ButtonDescription';

export default function ChairCard({name, mainImg, description, toggleDescription, id, showDescription}) {
  return (
    <ChairItem role="chair-item">
      <ChairHeader>{name}</ChairHeader>
      <ChairDetails>
        <img src={mainImg} alt={name} width="120" />
        <Description>
          <ButtonDescription toggleDescription={toggleDescription} id={id} showDescription={showDescription} />
          {showDescription && <Paragraph>{description}</Paragraph>}
        </Description>
      </ChairDetails>
    </ChairItem>
  );
}

const ChairItem = styled.section`
  display: flex;
  flex-flow: column wrap;
  border: solid 4px black;
  margin: 1rem;
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
`;
const Paragraph = styled.p`
  color: #060606;
  text-align: center;
`;
const Description = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: var(--primary-color);
`;
