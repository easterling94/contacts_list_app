import { useAppSelector } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const ModalEdit = () => {
  const modalData = useAppSelector((state) => state.modal);
  return (
    <>
      <div className={styles.header}>{modalData?.title}</div>
      {/* <Input
        type='text'
        placeholder='Имя'
        required={true}
        value={modalData?.data?.name}
      />
      <Input
        type='text'
        placeholder='Телефон'
        required={true}
        value={modalData?.data?.phone}
      /> */}
      <div className={styles.btns}>
        <Button text='Сбросить' type='reset' />
        <Button text='Сохранить' type='submit' />
      </div>
    </>
  );
};
