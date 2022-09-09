import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';
import authSelectors from '../redux/auth/auth-selectors';


export const useAuth = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const user = useSelector(authSelectors.getUser);
  console.log(isLoggedIn,isRefreshing, user)

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
