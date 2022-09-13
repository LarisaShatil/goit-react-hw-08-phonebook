import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from '../../hooks';
// import { Box } from '../Box';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems:'center',
  },
  avatar: {
    margin: 5,
    width: 60,
    borderRadius: 50,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
const dispatch = useDispatch();
// const user = useSelector(authSelectors.getUser);

//   console.log(user, 'user');
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      {/* <span style={styles.name}>You are welcome, {user.name}</span> */}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </div>
  );
}