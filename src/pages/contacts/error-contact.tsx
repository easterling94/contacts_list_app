import styles from './home.module.scss';
export const ErrorContact = () => {
  return (
    <section className={styles.sectionRight}>
      <h1>Хм...</h1>
      <h2>Похоже, что данного контакта не существует.</h2>
    </section>
  );
};
