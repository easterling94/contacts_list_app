import { useAppSelector } from '../../hooks/redux';
import { removeLocalStorageUser } from '../../utils/storage';
import styles from './profile-page.module.css';
// import { auth } from '../../firebase-config';
import { getAuth, signOut, deleteUser } from 'firebase/auth';

export const ProfilePage = () => {
  const auth = getAuth();
  const userFirebase = auth.currentUser;

  const user = useAppSelector((state) => state.user.user);
  const handleLogout = () => {
    removeLocalStorageUser();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleDeleteUser = () => {
    removeLocalStorageUser();
    console.log(auth);
    console.log(userFirebase);
    if (userFirebase) {
      deleteUser(userFirebase)
        .then(() => {
          console.log('success');
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
