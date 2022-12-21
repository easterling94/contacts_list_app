import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to='/home'>
        Главная
      </Link>
      <Link className={styles.link} to='login'>
        Кабинет
      </Link>
    </nav>
  );
};
