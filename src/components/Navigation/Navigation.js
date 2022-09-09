import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { authSelectors } from '../../redux/auth';
import { useAuth } from '../../hooks';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(useSelector(authSelectors.getUser));
  // const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <nav>
      <Link to="/">Main</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;