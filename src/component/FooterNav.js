import {AiFillHome} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function FooterNav() {
  return (
    <NavStyledContainer>
      <NavContainer>
        <Link to="/">
          <AiFillHome />
        </Link>

        <Link to="/favorite" >
          <FaHeart />
        </Link>
      </NavContainer>
    </NavStyledContainer>
  );
}

const NavStyledContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border: 2px solid white;
  background-color: var(--primary-color);
`;
