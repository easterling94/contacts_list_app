import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import styles from './navigation.module.scss';

export const Navigation = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} to='/home'>
        Главная
      </Link>
      {user ? (
        <Link className={styles.link} to='profile'>
          Профиль
        </Link>
      ) : (
        <Link className={styles.link} to='login'>
          Войти
        </Link>
      )}
    </nav>
  );
};
