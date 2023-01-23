import { useAppSelector } from '../../hooks/redux';
import { removeLocalStorageUser } from '../../utils/storage';
import styles from './profile-page.module.css';

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user.user);
  const handleLogout = () => {
    removeLocalStorageUser();
  };
  return (
    <div className={styles.wrapper}>
      <h2>{user?.name}</h2>
      <button onClick={handleLogout}>Выйти из системы</button>
      <button>Поменять данные пользователя</button>
    </div>
  );
};
