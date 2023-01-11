import styles from './home.module.scss';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ContactListSlice } from '../../services/reducers/contact-list';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { IUserContacts } from '../../services/reducers/users';
import { ModalSlice } from '../../services/reducers/modal';
import { IModalData, TModalType } from '../../services/reducers/modal';
import { ModalOverlay } from '../../components/modal/modal-overlay';
import { ModalDelete } from '../../components/modal/modal-delete';
import { ModalEdit } from '../../components/modal/modal-edit';
import { ModalNew } from '../../components/modal/modal-new';
import { Loader } from '../../components/modal/loader';

const ContactsList = () => {
  const width = useAppSelector((state) => state.drag.width);
  const contacts = useAppSelector((state) => state.user.userContacts);
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
    <section className={styles.sectionLeft} style={{ width: width }}>
      <nav className={styles.contactList}>
        <ul>
          {contacts?.length ? (
            contacts.map((el) => (
              <li key={el.phone}>
                <NavLink
                  to={`/home/${el.id}`}
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

const DragBar = () => {
  /*
    Не удалось избавиться от not-allowed курсора при переносе разделителя над блоками ContactsList и ContactInfo, надо подумать над другим способом реализовать изменение ширины блоков
  */

  const { changeWidth } = ContactListSlice.actions;
  const dispatch = useAppDispatch();

  const handleDragStart = (e: React.DragEvent): void => {
    e.dataTransfer.setDragImage(new Image(0, 0), 0, 0);
  };
  const handleDrag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    dispatch(changeWidth(e.clientX));
  };
  const handleDragEnd = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    dispatch(changeWidth(e.clientX));
  };

  return (
    <div
      className={styles.drag}
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      onDrag={(e) => handleDrag(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    ></div>
  );
};

export const ContactInfo = () => {
  const { openModal, fillModal } = ModalSlice.actions;
  const contacts = useAppSelector((state) => state.user.userContacts);
  const dispatch = useAppDispatch();
  const userId = useParams();
  const contact: IUserContacts | undefined = contacts?.filter(
    (el) => el.id === userId.contactId
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
    const contactDelete = null;
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(contactDelete));
  };

  return (
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
  );
};

export const HomePage = () => {
  const modal = useAppSelector((state) => state.modal);
  const userDataRequesting = useAppSelector(
    (state) => state.user.userDataRequested
  );

  return (
    <div className={styles.wrapper}>
      <ContactsList />
      <DragBar />
      <Outlet />
      {modal.isModalOpened ? (
        <ModalOverlay>
          {modal.modalType === 'edit' ? (
            <ModalEdit />
          ) : modal.modalType === 'delete' ? (
            <ModalDelete />
          ) : modal.modalType === 'add' ? (
            <ModalNew />
          ) : (
            ''
          )}
        </ModalOverlay>
      ) : (
        ''
      )}
      {userDataRequesting ? (
        <ModalOverlay>
          <Loader />
        </ModalOverlay>
      ) : (
        ''
      )}
    </div>
  );
};
