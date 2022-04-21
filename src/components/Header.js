import { NavLink } from 'react-router-dom';
import NoneStyledButton from './NoneStyledButton';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { useState } from 'react';

export default function Header({ token, onLogout }) {
  const [showSidebar, setShowSidebar] = useState(false);

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <StyledHeader>
        <NavLink to="/">
          <h1>
            Rando<span>meal</span>izer
          </h1>
        </NavLink>
        {/* <Logo /> */}
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          {token && <NavLink to="/profile">Profile</NavLink>}
          {token ? (
            <NoneStyledButton onClick={onLogout}>Logout</NoneStyledButton>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </Nav>
        <Burger
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? 'active' : ''}
        >
          <div></div>
          <div></div>
          <div></div>
        </Burger>
      </StyledHeader>
      {showSidebar && (
        <Sidebar close={closeSidebar} token={token} onLogout={onLogout} />
      )}
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;
  background-color: var(--background-color);
  color: #dfe2f2;
  box-shadow: 0 3px 6px var(--shadow-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5vw;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 36px 36px; */

  span {
    color: rgb(10, 10, 10);
  }

  h1 {
    font-size: 1.7rem;
    text-shadow: 0 1px 3px var(--shadow-color);
    color: var(--primary-color);
  }

  svg {
    grid-column-start: 3;
    justify-self: end;
    margin: 5px;
  }
`;

const Nav = styled.nav`
  display: flex;

  justify-content: space-evenly;

  a {
    color: var(--text-light);

    margin-left: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  a.active {
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div`
  height: 28px;
  width: 30px;
  position: relative;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }

  div {
    border-radius: 5px;
    height: 6px;
    width: 100%;
    background-color: rgb(10, 10, 10);
    position: absolute;
    transition: transform calc(var(--animation-speed) * 0.5s) ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform-origin: right;
      transform: scaleX(0.8) translateY(-50%);
    }
    &:nth-child(3) {
      top: 100%;
      transform-origin: right;
      transform: scaleX(1.1) translateY(-100%);
    }
  }
  &.active {
    div {
      transform-origin: center;
      top: 50%;
      &:nth-child(1) {
        transform: translate(0, -50%) scale(1) rotate(45deg);
      }
      &:nth-child(2) {
        transform: scaleX(0) translateY(-50%);
      }
      &:nth-child(3) {
        transform: translate(0, -50%) scale(1) rotate(-45deg);
      }
    }
  }
`;
