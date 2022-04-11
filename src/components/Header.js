import Logo from '../svg/Logo';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Randomealizer</h1>
      <Logo />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
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
  display: flex;
  padding: 12px;
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
    margin: 0 50px;
  }

  a.active {
    border-color: white;
  }
`;
