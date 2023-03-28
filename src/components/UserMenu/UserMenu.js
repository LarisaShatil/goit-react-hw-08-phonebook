import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import FlexContainer from "../FlexContainer/FlexContainer";

import s from './UserMenu.module.css';



export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  console.log(user);

  return (
    <FlexContainer>
        <div className={s.avatar_box}>
          <img
          src={`https://eu.ui-avatars.com/api/?background=a355d3&color=fff&&length=2&name=${user.name}`}
            alt="avatar"
            title="Your avatar"
            className={s.avatar}
          />
        </div>
        <span className={s.name}>{user.name}</span>
        <button className={s.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
          Sign out
        </button>
    </FlexContainer>

  );
}