import styled from 'styled-components';

import { ButtonDescription } from './ButtonDescription';


export default function ChairCard({name, mainImg, description}) {


  return (
    <ChairItem role="listItem">
      <ChairHeader >{name}</ChairHeader>
      <ChairDetails>
        <img src={mainImg} alt={name} width="200" />
        <ButtonDescription>Description</ButtonDescription>
        <p>{description}</p>
      </ChairDetails>
    </ChairItem>
  );
}

const ChairItem = styled.section`
  display: flex;
  flex-flow: column wrap;
  border: solid 4px black;
  margin: 2rem;
`;

const ChairHeader = styled.header`
  align-self: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem;
`;

const ChairDetails = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 1rem;

 
`;
