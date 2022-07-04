import {AiFillCaretUp} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';
import styled from 'styled-components';

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly';

export default function ButtonDescription({toggleDescription, showDescription, id, name, description}) {
  return (
    <Button role="button" onClick={toggleDescription}>
      <span>
        {showDescription === id ? (
          <AiFillCaretUp />
        ) : (
          <p>
            Show more Information <AiFillCaretDown />
          </p>
        )}
      </span>
      <Open showDescription={showDescription === id ? true : false}>{description}</Open>
      <ScreenReaderOnly>description text about {name}</ScreenReaderOnly>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 0.8rem;
  background-color: var(--primary-light-color);
  font-weight: 600;
  padding: 0;
  box-shadow: 0 0 2px 2px rgba(31, 31, 32, 0.1);
  margin: 0.7rem;
  color: var(--secondary-color);
  max-width: 15rem;
`;
const Open = styled.div`
  height: ${({showDescription}) => (showDescription ? '280px' : '0')};
  overflow-y: scroll;
  scroll-behavior: scroll;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-size: 1rem;
  font-weight: 300;
  background-color: var(--primary-light-color);
`;
