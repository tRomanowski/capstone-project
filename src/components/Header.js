import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Randomealizer</h1>
      <FaTimes style={{ color: 'white', height: '30px', width: '30px' }} />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  background-color: #0dde45;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  padding: 24px;
  justify-content: space-evenly;

  a {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid transparent;
  }

  a.active {
    border-color: white;
  }
`;
