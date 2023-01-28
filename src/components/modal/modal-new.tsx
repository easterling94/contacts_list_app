import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { IModalData, ModalSlice } from '../../services/reducers/modal';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { SyntheticEvent } from 'react';
import { addContact } from '../../services/reducers/ActionCreators';
import { useNavigate } from 'react-router-dom';
import { contactShortcut } from '../../hooks/functions';
import { v4 } from 'uuid';

export const ModalNew = () => {
  const modalData = useAppSelector((state) => state.modal);
  const userContacts = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const { fillModal, closeModal } = ModalSlice.actions;
  const navigate = useNavigate();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const modalDataGeneral = modalData.modalData?.data;
    if (modalDataGeneral && modalDataGeneral.name && userContacts?.contacts) {
      const enrichedContact = {
        ...modalDataGeneral,
        shortcut: contactShortcut(modalDataGeneral.name),
        id: v4(),
      };

      const newContactList = [...userContacts.contacts, enrichedContact];

      dispatch(addContact(newContactList));
      dispatch(closeModal());

      if (modalData.modalData?.data.name) {
        navigate(
          `/contacts/${contactShortcut(modalData.modalData?.data.name)}`
        );
      }
    }
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
    <form onSubmit={onSubmit}>
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
        <Button
          text='Сбросить'
          type='reset'
          buttonFunction={onReset}
          look='reset'
        />
        <Button text='Создать' type='submit' look='submit' />
      </div>
    </form>
  );
};
