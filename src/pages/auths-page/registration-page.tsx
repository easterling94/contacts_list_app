import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { createUser } from '../../services/reducers/ActionCreators';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(createUser(email, password));
    navigate('/profile');
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пожалуйста, зарегистрируйтесь</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input
          type='email'
          placeholder='Ваша почта'
          required={true}
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type='password'
          placeholder='Пароль'
          required={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className={styles.btns}>
          <Button type='submit' text='Регистрация' />
        </div>
        <p className={styles.footer}>
          Уже зарегистрированы? <Link to='/login'>Войти</Link>
        </p>
      </form>
    </div>
  );
};
