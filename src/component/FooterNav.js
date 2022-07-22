import {AiFillHome} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {keyframes} from 'styled-components';
import styled from 'styled-components';

export default function FooterNav() {
  return (
    <NavStyledContainer>
      <StyledNavLink to="/home" aria-label="home">
        <StyledHomeIcon />
      </StyledNavLink>

      <StyledNavLink to="/favorites" aria-label="favorites">
        <StyledHeardIcon />
      </StyledNavLink>
    </NavStyledContainer>
  );
}
const navIconAnimation = keyframes`
  0%
  {
    transform: scale( .9 );
    color: #f0ebeb;
  }
 
  100%
  {
    transform: scale( 1.1 );
    color: #7e1818;
  }
`;

const NavStyledContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;
  width: 100%;
  z-index: 1;
  border-radius: 10px;
  background-color: var(--primary-light-color);

  @media (min-width: 600px) {
    grid-template-columns: auto;
    width: 10%;
    right: 0;
    top: 20%;
    bottom: unset;
    height: 70%;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--primary-color);

  &.active {
    animation: ${navIconAnimation} .4s linear;
    color: var(--secondary-light-color);
  }
`;
const StyledHomeIcon = styled(AiFillHome)`
  font-size: 2.7rem;
`;
const StyledHeardIcon = styled(FaHeart)`
  font-size: 2.6rem;
`;
