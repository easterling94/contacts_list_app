import { Login } from '../components/login/login';
import { ModalHeader } from '../components/modal/modal-header';
import { ModalOverlay } from '../components/modal/overlay';

export const LoginPage = () => {
  return (
    <ModalOverlay>
      <ModalHeader />
      <Login />
    </ModalOverlay>
  );
};
