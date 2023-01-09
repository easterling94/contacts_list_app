import { useAppSelector } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';

const modalData = useAppSelector((state) => state.modal.modalData);

export const ModalEdit = () => {
  return (
    <>
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
      <div className={styles.btns}>
        <Button text='Сбросить' type='cancel' />
        <Button text='Сохранить' type='submit' />
      </div>
    </>
  );
};
