import React from "react";
import { useSelector } from "react-redux";

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from "../../redux/auth";
import FlexContainer from '../FlexContainer/FlexContainer';
import s from './AppBar.module.css';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <FlexContainer style={{padding: '20px'}}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </FlexContainer>
    </header>
  );
}