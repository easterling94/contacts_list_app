import styles from './contacts.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { NavLink } from 'react-router-dom';
import { ModalSlice } from '../../services/reducers/modal';
import { IModalData, TModalType } from '../../services/reducers/modal';
import { contactShortcut } from '../../hooks/functions';

export const SectionLeft = () => {
  const state = useAppSelector((state) => state.contacts.whatToShow);
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
    <section
      className={
        state === 'all' || state === 'left'
          ? styles.sectionLeft
          : styles.sectionLeftHide
      }
    >
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
        {state === 'left' ? '+' : 'Новый контакт'}
      </button>
    </section>
  );
};
