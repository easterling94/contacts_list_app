import styles from './contacts.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const NoContactChosen = () => {
  const state = useAppSelector((state) => state.contacts.whatToShow);
  return (
    <section
      className={
        state === 'all' || state === 'right'
          ? styles.sectionRight
          : styles.sectionRightHide
      }
    >
      <h2>Выберите контакт</h2>
    </section>
  );
};
