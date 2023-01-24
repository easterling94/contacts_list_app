import { Input } from '../../components/input/input';
import styles from './auths.module.css';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { SyntheticEvent } from 'react';
import { setLocalStorageArr } from '../../utils/storage';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            const test = {
              userId: uid,
            };
            setLocalStorageArr([test]);
            console.log(uid);
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
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
          <Button type='submit' text='Вход' />
        </div>
      </form>
    </div>
  );
};
