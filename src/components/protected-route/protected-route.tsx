import { getLocalStorageKey } from '../../utils/storage';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isUserAuthorized = getLocalStorageKey('userId');
  return isUserAuthorized ? (
    children
  ) : (
    <Navigate to={'/login'} replace></Navigate>
  );
};
