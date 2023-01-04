import styles from './home.module.scss';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ContactListSlice } from '../../services/reducers/contact-list';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { IUserContacts } from '../../types/data';

const ContactsList = () => {
  const width = useAppSelector((state) => state.drag.width);
  const contacts = useAppSelector((state) => state.user.user?.contacts);

  return (
    <nav className={styles.contactList} style={{ width: width }}>
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
  const contacts = useAppSelector((state) => state.user.user?.contacts);
  const userId = useParams();
  let contact: IUserContacts | undefined = contacts?.filter(
    (el) => el.id === userId.contactId
  )[0];

  return (
    <section className={styles.section}>
      <h1>{contact?.name}</h1>
      <h2>{contact?.phone}</h2>
      <div className={styles.buttons}>
        <button className={styles.edit} type='submit'>
          Изменить
        </button>
        <button className={styles.delete} type='submit'>
          Удалить
        </button>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <ContactsList />
      <DragBar />
      <Outlet />
    </div>
  );
};
