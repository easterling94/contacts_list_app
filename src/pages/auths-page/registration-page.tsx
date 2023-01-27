import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useEffect, useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { createUser } from '../../services/reducers/ActionCreators';
import { getLocalStorageKey } from '../../utils/storage';

export const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckAlert, setPasswordCheckAlert] =
    useState('Повторите пароль');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (password) {
      setPasswordCheck(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (password) {
      if (password !== passwordCheck) {
        setPasswordCheckAlert('Пароли не совпадают!');
      } else {
        setPasswordCheckAlert('Пароли совпали');
      }
    } else {
      setPasswordCheckAlert('Повторите пароль');
    }
  }, [password, passwordCheck]);

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert('Пароли не совпадают!');
      setPassword('');
      setPasswordCheck('');
      setPasswordCheckAlert('Повторите пароль');
      return;
    }
    await dispatch(createUser(email, password));
    if (getLocalStorageKey('userId')) {
      navigate('/profile');
    }
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
          placeholder='Придумайте пароль'
          required={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <Input
          type='password'
          placeholder={passwordCheckAlert}
          required={true}
          value={passwordCheck}
          onChange={handlePasswordCheckChange}
        />
        <div className={styles.btns}>
          <Button type='submit' text='Регистрация' look='submit' />
        </div>
        <p className={styles.footer}>
          Уже зарегистрированы? <Link to='/login'>Войти</Link>
        </p>
      </form>
    </div>
  );
};
