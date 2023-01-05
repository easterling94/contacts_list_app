import { ModalOverlay } from '../../components/modal/modal-overlay';
import styles from './modal.module.css';

export const Modal = () => {
  return (
    <ModalOverlay>
      <div className={styles.header}>Регистрация</div>
    </ModalOverlay>
  );
};
