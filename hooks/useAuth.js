import { useSelector } from 'react-redux';
import { selectAuthState } from '../redux/login/authSelectors';

export const useAuth = () => {
  const authState = useSelector(selectAuthState);

  return { authState };
};