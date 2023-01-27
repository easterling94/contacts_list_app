import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/reducers/ActionCreators';
import { useAppDispatch } from '../../hooks/redux';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(login(email, password));
    navigate('/profile');
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Вход</h2>
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
          <Button type='submit' text='Вход' look='submit' />
        </div>
        <p className={styles.footer}>
          Не зарегистрированы?{' '}
          <Link to='/registration'>Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  );
};
