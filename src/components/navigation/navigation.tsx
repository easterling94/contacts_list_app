import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import styles from './navigation.module.scss';

export const Navigation = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.linkActive}` : `${styles.linkNotActive}`
        }
        to='/contacts'
      >
        Контакты
      </NavLink>
      {user ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.linkActive}` : `${styles.linkNotActive}`
          }
          to='profile'
        >
          Профиль
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.linkActive}` : `${styles.linkNotActive}`
          }
          to='login'
        >
          Войти
        </NavLink>
      )}
    </nav>
  );
};
