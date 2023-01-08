import { ModalOverlay } from '../../components/modal/modal-overlay';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { useAppSelector } from '../../hooks/redux';
import { Button } from '../button/button';

export const Modal = () => {
  const modalData = useAppSelector((state) => state.modal.modalData);
  return (
    <ModalOverlay>
      <div className={styles.header}>{modalData?.title}</div>
      {modalData?.data?.name ? (
        <Input
          type='text'
          placeholder='Имя'
          required={true}
          value={modalData?.data?.name}
        />
      ) : (
        ''
      )}
      <Button text='Сбросить' />
      <Button text='Сохранить' />
    </ModalOverlay>
  );
};
