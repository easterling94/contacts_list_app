import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './modal.module.css';
import { Input } from '../input/input';
import { IModalData, ModalSlice } from '../../services/reducers/modal';
import { SyntheticEvent } from 'react';
import { editContact } from '../../services/reducers/ActionCreators';
import { Button } from '../button/button';
import { useParams } from 'react-router-dom';
import { IUserContact } from '../../services/reducers/user';
import { useNavigate } from 'react-router-dom';
import { contactShortcut } from '../../hooks/functions';

export const ModalEdit = () => {
  const modalData = useAppSelector((state) => state.modal);
  const userContacts = useAppSelector((state) => state.user.user?.contacts);
  const dispatch = useAppDispatch();
  const { fillModal, closeModal } = ModalSlice.actions;
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (userContacts) {
      const editingContact: IUserContact = userContacts?.filter((el) => {
        return el.shortcut === params.contactShortcut;
      })[0];
      const modalDataGeneral = modalData.modalData?.data;
      if (modalDataGeneral && modalDataGeneral.name) {
        const enrichedContact = {
          ...modalDataGeneral,
          id: editingContact.id,
          shortcut: contactShortcut(modalDataGeneral.name),
        };

        const newContactList = userContacts.map((contact) =>
          contact.shortcut === editingContact.shortcut
            ? enrichedContact
            : contact
        );

        dispatch(editContact(newContactList));
        if (modalData.modalData?.data.name) {
          navigate(
            `/contacts/${contactShortcut(modalData.modalData?.data.name)}`
          );
        }
        dispatch(closeModal());
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
        <Button text='Сохранить' type='submit' look='submit' />
      </div>
    </form>
  );
};
