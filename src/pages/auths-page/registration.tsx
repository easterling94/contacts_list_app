import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пожалуйста, зарегистрируйтесь</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
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
      </form>
    </div>
  );
};
