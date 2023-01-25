import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeLocalStorageUser } from '../../utils/storage';
import styles from './profile-page.module.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/reducers/ActionCreators';

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);

  const handleLogout = async () => {
    removeLocalStorageUser();
    dispatch(logout());
    navigate('/');
  };
  const handleDeleteUser = () => {
    removeLocalStorageUser();
    // if (userFirebase) {
    //   deleteUser(userFirebase)
    //     .then(() => {
    //       console.log('success');
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  };
  const handleUpdateUser = () => {
    removeLocalStorageUser();
  };
  return (
    <div className={styles.wrapper}>
      <h2>{user?.name}</h2>
      <button onClick={handleLogout}>Выйти из системы</button>
      <button onClick={handleDeleteUser}>Удалить пользователя</button>
      <button onClick={handleUpdateUser}>Поменять данные пользователя</button>
    </div>
  );
};
