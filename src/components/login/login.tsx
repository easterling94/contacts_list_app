import { SyntheticEvent } from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';
import styles from './login.module.css';

export const Login = () => {
  const register = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className={styles.form}>
      <Input placeholder='Логин' type='text' />
      <Input placeholder='Пароль' type='password' />
      <Button buttonFunction={register} text='Далее' />
    </form>
  );
};
