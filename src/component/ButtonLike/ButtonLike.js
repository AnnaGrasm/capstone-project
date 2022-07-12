import {useState} from 'react';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function ButtonLike() {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <StyledButton onClick={toggleLike} aria-label="like">
      <StyledHeartIcon $isLiked={isLiked} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  background: transparent;
  border: none;
`;

const StyledHeartIcon = styled(FaHeart)`
  color: ${({$isLiked}) => ($isLiked ? '#662121' : '#e5cfcf')};
  font-size: 2rem;

`;
