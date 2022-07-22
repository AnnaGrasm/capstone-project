import {AiFillCaretUp} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import styled from 'styled-components';

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

export default function ButtonDescription({toggleDescription, showDescription, id, name, description}) {
  return (
    <Button role="button" onClick={toggleDescription}>
      {showDescription === id ? (
        <StyledInformation>
          <AiFillCaretUp /> Show less Information 
        </StyledInformation>
      ) : (
        <StyledInformation>
          Show more Information <AiFillCaretDown />
        </StyledInformation>
      )}

      <OpenDescriptionText showDescription={showDescription === id ? true : false}>
        <p>{description}</p>
      </OpenDescriptionText>
      <ScreenReaderOnly>description text about {name}</ScreenReaderOnly>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 0.8rem;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 0 2px 2px rgba(31, 31, 32, 0.1);
  margin: 0.7rem;
  color: var(--secondary-color);
  background-color: transparent;
  max-width: 18rem;

  @media (min-width: 667px) {
    max-width: 30rem;
  }
`;
const OpenDescriptionText = styled.div`
  height: ${({showDescription}) => (showDescription ? 'auto' : '0')};
  overflow-y: scroll;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: transparent;

  p {
    font-size: 1.1rem;
    font-weight: 350;
    text-transform: none;
    line-height: 1.4rem;
  }
`;

const StyledInformation = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`