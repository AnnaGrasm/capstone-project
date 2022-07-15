import {AiFillHome} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {keyframes} from 'styled-components';
import styled from 'styled-components';

export default function FooterNav() {
  return (
    <NavStyledContainer>
      <StyledNavLink to="/">
        <span></span>
        <StyledHomeIcon />
      </StyledNavLink>

      <StyledNavLink to="/favorites">
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
    border-top: .5px solid #f0ebeb;
  }

  50%
  {
    transform: scale( 1 );
    color: #a23e3e;
    border-top: 1px solid #a23e3e;
  }
 
  100%
  {
    transform: scale( 1.1 );
    color: #7e1818;
    border-top: 1.5px solid #7e1818;
  }
`;

const NavStyledContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;
  width: 90%;
  margin: 1.2rem;
  z-index: 1;
  border: 2px solid white;
  border-radius: 10px;
  background-color: var(--primary-light-color);

  @media (min-width: 600px) {
    grid-template-columns: auto;
    width: 10%;
    right: 0;
    bottom: unset;
    height: 90%;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--primary-color);

  &.active {
    animation: ${navIconAnimation} 1s linear;
    color: var(--secondary-light-color);
    border-top: var(--secondary-light-color) solid 2px;
  }
`;
const StyledHomeIcon = styled(AiFillHome)`
  font-size: 2.7rem;
`;
const StyledHeardIcon = styled(FaHeart)`
  font-size: 2.6rem;
`;
