import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import styles from './modal.module.css';
import { Button } from '../button/button';
import { deleteUser } from '../../services/reducers/ActionCreators';
import { SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { ModalSlice } from '../../services/reducers/modal';
import { useNavigate } from 'react-router-dom';
import { IUserContact } from '../../services/reducers/users';

export const ModalDelete = () => {
  const modalData = useAppSelector((state) => state.modal);
  const userContacts = useAppSelector((state) => state.user.userContacts);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { closeModal } = ModalSlice.actions;
  const navigate = useNavigate();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (userContacts) {
      const contactID: IUserContact = userContacts?.filter((el) => {
        return el.shortcut === params.contactShortcut;
      })[0];
      dispatch(deleteUser(contactID.id));
      dispatch(closeModal());
      navigate('/home');
    }
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
