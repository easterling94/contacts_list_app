import styles from './login.module.scss';
import { db } from '../../firebase-config';
import { collection, doc, getDocs } from '@firebase/firestore';

export const LoginPage = () => {
  const usersCollection = collection(db, 'users');
  const handleClick = async () => {
    const getUser = async () => {
      const data = await getDocs(usersCollection);
      return data.docs.map((el) => ({ ...el.data(), id: el.id }));
    };
    console.log(await getUser());
  };
  return (
    <>
      <div>Страница логина</div>
      <button onClick={handleClick}>Test</button>
    </>
  );
};
