import styles from './contacts.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { IUserContact } from '../../services/reducers/user';
import { ModalSlice } from '../../services/reducers/modal';
import { IModalData, TModalType } from '../../services/reducers/modal';
import { contactShortcut } from '../../hooks/functions';
import { ErrorContact } from './error-contact';
import { useState, useEffect } from 'react';

const ContactsList = () => {
  const contacts = useAppSelector((state) => state.user.user?.contacts);
  const { openModal, fillModal } = ModalSlice.actions;
  const dispatch = useAppDispatch();

  const handleAddContact = () => {
    const modalGeneral: { title: string; modalType: TModalType } = {
      title: 'Добавьте новый контакт',
      modalType: 'add',
    };
    const contactNew: IModalData = {
      data: {
        name: '',
        phone: '',
      },
    };
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(contactNew));
  };

  return (
    <section className={styles.sectionLeft}>
      <nav className={styles.contactList}>
        <ul>
          {contacts?.length ? (
            contacts.map((el) => (
              <li key={el.phone}>
                <NavLink
                  to={`/contacts/${contactShortcut(el.name)}`}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : undefined
                  }
                >
                  {el.name}
                </NavLink>
              </li>
            ))
          ) : (
            <p>Пока нет контактов</p>
          )}
        </ul>
      </nav>
      <button className={styles.btnNew} onClick={handleAddContact}>
        Новый контакт
      </button>
    </section>
  );
};

export const ContactInfo = () => {
  const { openModal, fillModal } = ModalSlice.actions;
  const contacts = useAppSelector((state) => state.user.user?.contacts);
  const dispatch = useAppDispatch();
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

  return (
    <>
      {contact ? (
        <section className={styles.sectionRight}>
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

export const ContactsMain = () => {
  const [width, setWidth] = useState<null | number>(null);
  useEffect(() => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  }, []);
  return (
    <div className={styles.wrapper}>
      <ContactsList />
      <Outlet />
    </div>
  );
};
