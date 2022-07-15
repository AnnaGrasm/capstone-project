import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function ButtonLike({toggleLike, isLiked}) {
  return (
    <StyledButton onClick={toggleLike}>
      {isLiked ? <StyledHeartIcon active="active" /> : <StyledHeartIcon />}
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
  color: ${({active}) => (active ? 'var(--secondary-light-color)' : ' var(--primary-light-color)')};
  font-size: 2rem;
`;
