import Logo from '../svg/Logo';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header({ token }) {
  return (
    <StyledHeader>
      <h1>Randomealizer</h1>
      <Logo />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/login">Login</NavLink>
        {token && <NavLink to="/profile">Profile</NavLink>}
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  background-color: #65a603;
  color: #dfe2f2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 36px 36px;

  h1 {
    font-size: 1.7rem;
  }

  svg {
    grid-column-start: 3;
    justify-self: end;
    margin: 5px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 12px;
  gap: 20px;
  justify-content: space-evenly;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  justify-self: center;
  align-self: center;

  a {
    color: #dfe2f2;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0;
  }

  a.active {
    border-color: white;
  }
`;
