import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const ModalNew = () => {
  const modalData = useAppSelector((state) => state.modal.modalData);
  return (
    <>
      <div className={styles.header}>{modalData?.title}</div>
      <Input type='text' placeholder='Имя' required={true} value='' />
      <Input type='text' placeholder='Телефон' required={true} value='' />
      <div className={styles.btns}>
        <Button text='Сбросить' type='cancel' />
        <Button text='Создать' type='submit' />
      </div>
    </>
  );
};
