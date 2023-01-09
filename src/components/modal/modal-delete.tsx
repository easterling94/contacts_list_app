import { useAppSelector } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const ModalDelete = () => {
  const modalData = useAppSelector((state) => state.modal.modalData);
  return (
    <>
      <div className={styles.header}>{modalData?.title}</div>
      <div className={styles.btns}>
        <Button text='Удалить' type='submit' />
      </div>
    </>
  );
};
