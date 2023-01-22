import styles from './login.module.scss';
import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore';

export const LoginPage = () => {
  const usersCollection = collection(db, 'users');
  const handleClick = async () => {
    // const getUser = async () => {
    //   const data = await getDocs(usersCollection);
    //   const test2 = data.docs[0].data();
    //   const test = data.docs.map((el) => ({
    //     name: test2.name,
    //     contacts: test2.contacts,
    //     id: el.id,
    //   }));
    //   return test;
    // };
    // console.log(await getUser());
  };
  return (
    <>
      <div>Страница логина</div>
      <button onClick={handleClick}>Test</button>
    </>
  );
};
