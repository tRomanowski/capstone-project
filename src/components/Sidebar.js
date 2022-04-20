import {
  FaHouseUser,
  FaList,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaRegUser,
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Sidebar({ token, onLogout, close }) {
  return (
    <StyledSidbar onClick={close}>
      {' '}
      <Nav>
        <NavLink to="/">
          <FaHouseUser style={{ marginRight: '10px' }} />
          Home
        </NavLink>
        <NavLink to="/favorites">
          <FaList style={{ marginRight: '10px' }} />
          Favorites
        </NavLink>
        {token && (
          <NavLink to="/profile">
            <FaRegUser style={{ marginRight: '10px' }} />
            Profile
          </NavLink>
        )}
        {token ? (
          <NoneStyledButton onClick={onLogout}>
            <FaRegArrowAltCircleDown style={{ marginRight: '10px' }} />
            Logout
          </NoneStyledButton>
        ) : (
          <NavLink to="/login">
            <FaRegArrowAltCircleUp style={{ marginRight: '10px' }} />
            Login
          </NavLink>
        )}
      </Nav>
    </StyledSidbar>
  );
}

const StyledSidbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  background-color: #fff;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.2), 3px 0 5px var(--shadow-color);
  animation: slidein 0.2s linear 0s;

  @keyframes slidein {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const NoneStyledButton = styled.button`
  color: var(--text-light);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: var(--font-size);

  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;

  a {
    color: var(--text-light);
    text-decoration: none;

    letter-spacing: 1px;
    padding: 0.5em 1em;
    border-left: 0.4em solid transparent;
    &.active {
      border-left-color: var(--primary-color);
    }
  }
`;
