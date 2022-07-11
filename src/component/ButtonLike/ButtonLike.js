import {useState} from 'react';
import {FaHeart} from 'react-icons/fa';
import styled from 'styled-components';

export default function ButtonLike() {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <>
      <ButtonHeart onClick={toggleLike}>
        {isLiked ? (
          <FaHeart style={{color: '#8d2c2c', fontSize: '2rem'}} />
        ) : (
          <FaHeart style={{color: '#f0e2eb', fontSize: '2rem'}} />
        )}
      </ButtonHeart>
    </>
  );
}

const ButtonHeart = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  background: transparent;
  border: none;
`;
