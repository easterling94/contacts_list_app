import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { IModalData, ModalSlice } from '../../services/reducers/modal';
import { SyntheticEvent } from 'react';
import { editUser } from '../../services/reducers/ActionCreators';
import { Button } from '../button/button';
import { useParams } from 'react-router-dom';

export const ModalEdit = () => {
  const modalData = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const { fillModal, closeModal } = ModalSlice.actions;
  const params = useParams();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(editUser(params.contactId, modalData.modalData?.data));
    dispatch(closeModal());
  };

  const onReset = () => {
    const reset: IModalData = {
      data: {
        name: '',
        phone: '',
      },
    };
    dispatch(fillModal(reset));
  };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldChange: IModalData = {
      data: {
        name: e.target.value,
        phone: modalData.modalData?.data.phone,
      },
    };
    dispatch(fillModal(fieldChange));
  };

  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldChange: IModalData = {
      data: {
        name: modalData.modalData?.data.name,
        phone: e.target.value,
      },
    };
    dispatch(fillModal(fieldChange));
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.header}>{modalData?.title}</div>
      <Input
        type='text'
        placeholder='Имя'
        required={true}
        value={modalData.modalData?.data.name}
        onChange={nameChange}
      />
      <Input
        type='text'
        placeholder='Телефон'
        required={true}
        value={modalData.modalData?.data.phone}
        onChange={phoneChange}
      />
      <div className={styles.btns}>
        <Button text='Сбросить' type='reset' buttonFunction={onReset} />
        <Button text='Сохранить' type='submit' />
      </div>
    </form>
  );
};
