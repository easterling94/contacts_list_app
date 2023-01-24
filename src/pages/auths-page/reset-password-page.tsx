import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(password);
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Восстановление пароля</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input
          type='password'
          placeholder='Пароль'
          required={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className={styles.btns}>
          <Button type='submit' text='Восстановить' />
        </div>
      </form>
    </div>
  );
};
