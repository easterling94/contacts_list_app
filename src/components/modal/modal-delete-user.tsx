import { Button } from '../button/button';
import styles from './modal.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../services/reducers/ActionCreators';
import { SyntheticEvent } from 'react';
import { ModalSlice } from '../../services/reducers/modal';

export const ModalDeleteUser = () => {
  const { closeModal } = ModalSlice.actions;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const modalData = useAppSelector((state) => state.modal);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(deleteUser());
    dispatch(closeModal());
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.header}>{modalData?.title}</div>
      <div className={styles.btns}>
        <Button text='Удалить' type='submit' look='delete' />
      </div>
    </form>
  );
};
