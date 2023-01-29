import styles from './contacts.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IUserContact } from '../../services/reducers/user';
import { ModalSlice } from '../../services/reducers/modal';
import { IModalData, TModalType } from '../../services/reducers/modal';
import { contactShortcut } from '../../hooks/functions';
import { ErrorContact } from './error-contact';

export const SectionRight = () => {
  const state = useAppSelector((state) => state.contacts.whatToShow);
  const { openModal, fillModal } = ModalSlice.actions;
  const contacts = useAppSelector((state) => state.user.user?.contacts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userShortcut = useParams();
  const contact: IUserContact | undefined = contacts?.filter(
    (el) => contactShortcut(el.name) === userShortcut.contactShortcut
  )[0];

  const handleEditContact = () => {
    const modalGeneral: { title: string; modalType: TModalType } = {
      title: 'Внесите изменения в контакт',
      modalType: 'edit',
    };
    const contactEdit: IModalData = {
      data: {
        name: contact?.name,
        phone: contact?.phone,
      },
    };
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(contactEdit));
  };

  const handleDeleteContact = () => {
    const modalGeneral: { title: string; modalType: TModalType } = {
      title: 'Вы уверены, что хотите удалить данный контакт?',
      modalType: 'delete',
    };
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(null));
  };

  const handleBtnBack = () => {
    navigate('/contacts');
  };

  return (
    <>
      {contact ? (
        <section
          className={
            state === 'all' || state === 'right'
              ? styles.sectionRight
              : styles.sectionRightHide
          }
        >
          {state === 'right' ? (
            <button className={styles.btnBack} onClick={handleBtnBack}>
              &larr;
            </button>
          ) : (
            ''
          )}
          <h1>{contact?.name}</h1>
          <h2>{contact?.phone}</h2>
          <div className={styles.buttons}>
            <button
              className={styles.btnEdit}
              type='submit'
              onClick={handleEditContact}
            >
              Изменить
            </button>
            <button
              className={styles.btnDelete}
              type='submit'
              onClick={handleDeleteContact}
            >
              Удалить
            </button>
          </div>
        </section>
      ) : (
        <ErrorContact />
      )}
    </>
  );
};
