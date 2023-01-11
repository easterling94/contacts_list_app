import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './modal.module.css';
import { Button } from '../button/button';
import { deleteUser } from '../../services/reducers/ActionCreators';
import { SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { ModalSlice } from '../../services/reducers/modal';

export const ModalDelete = () => {
  const modalData = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { closeModal } = ModalSlice.actions;
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(deleteUser(params.contactId));
    dispatch(closeModal());
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.header}>{modalData?.title}</div>
      <div className={styles.btns}>
        <Button text='Удалить' type='submit' />
      </div>
    </form>
  );
};
