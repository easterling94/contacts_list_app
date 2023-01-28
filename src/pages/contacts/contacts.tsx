import styles from './contacts.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Outlet, useParams } from 'react-router-dom';
import { ContactsListSlicer } from '../../services/reducers/contacts-list';
import { TWhatToShow } from '../../services/reducers/contacts-list';
import { useEffect } from 'react';
import { useWindowResize } from '../../hooks/functions';
import { SectionLeft } from './section-left';
import { SectionRight } from './section-right';

const ContactsList = () => {
  return <SectionLeft />;
};

export const ContactInfo = () => {
  const state = useAppSelector((state) => state.contacts.whatToShow);
  return <SectionRight />;
};

export const ContactsMain = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const windowWidth = useWindowResize();

  useEffect(() => {
    const innerWidth = window.innerWidth;
    let behavior: TWhatToShow;
    innerWidth <= 500
      ? params.contactShortcut
        ? (behavior = 'right')
        : (behavior = 'left')
      : (behavior = 'all');
    dispatch(ContactsListSlicer.actions.changeContactsListBehavior(behavior));
  }, [params, windowWidth]);

  return (
    <div className={styles.wrapper}>
      <ContactsList />
      <Outlet />
    </div>
  );
};
