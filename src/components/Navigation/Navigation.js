import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { authSelectors } from '../../redux/auth';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 0;
  font-weight: 700;
  color: var(--black-color);
  &.active {
    color: var(--violet-color);
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <Link to="/">Main</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;