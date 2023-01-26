import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './profile-page.module.css';
import { updateUser } from '../../services/reducers/ActionCreators';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { TModalType } from '../../services/reducers/modal';
import { ModalSlice } from '../../services/reducers/modal';

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const { openModal, fillModal } = ModalSlice.actions;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleUpdateUser = () => {
    dispatch(updateUser(name, email));
  };

  const handleLogout = async () => {
    const modalGeneral: { title: string; modalType: TModalType } = {
      title: 'Вы уверены, что хотите выйти?',
      modalType: 'logout',
    };
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(null));
  };
  const handleDeleteUser = () => {
    const modalGeneral: { title: string; modalType: TModalType } = {
      title: 'Вы уверены, что хотите удалить ваш профиль?',
      modalType: 'deleteUser',
    };
    dispatch(openModal(modalGeneral));
    dispatch(fillModal(null));
  };

  useEffect(() => {
    setName(user.user?.name ? user.user?.name : '');
    setEmail(user.userEmail ? user.userEmail : '');
    return;
  }, [user.userEmail, user.user?.name]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Личный кабинет</h2>
      <form className={styles.form}>
        <Input
          type='text'
          placeholder='Ваше имя'
          required={true}
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type='email'
          placeholder='Ваша почта'
          required={true}
          value={email}
          onChange={handleEmailChange}
        />
      </form>
      <div className={styles.btns}>
        <Button
          text='Поменять данные пользователя'
          type='submit'
          buttonFunction={handleUpdateUser}
        />
        <Button
          text='Выйти из системы'
          type='button'
          buttonFunction={handleLogout}
        />
        <Button
          text='Удалить пользователя'
          type='button'
          buttonFunction={handleDeleteUser}
        />
      </div>
    </div>
  );
};
