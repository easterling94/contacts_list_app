import { Input } from '../../components/input/input';
import styles from './login.module.scss';
import { useState, useRef } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (refEmail.current) {
      console.log(email);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пожалуйста, авторизуйтесь</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input
          type='email'
          placeholder='Ваша почта'
          required={true}
          value={email}
          onChange={handleEmailChange}
          refProp={refEmail}
        />
        <Input
          type='password'
          placeholder='Пароль'
          required={true}
          value={password}
          onChange={handlePasswordChange}
          refProp={refPassword}
        />
        <div className={styles.btns}>
          <Button type='submit' text='Регистрация' />
        </div>
      </form>
    </div>
  );
};
