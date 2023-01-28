import styles from './contacts.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const ErrorContact = () => {
  const state = useAppSelector((state) => state.contacts.whatToShow);
  return (
    <section
      className={
        state === 'all' || state === 'right'
          ? styles.sectionRight
          : styles.sectionRightHide
      }
    >
      <h1>Хм...</h1>
      <h2>Похоже, что данного контакта не существует.</h2>
    </section>
  );
};
