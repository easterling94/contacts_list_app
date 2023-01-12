import styles from './welcome-page.module.css';
import { Button } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
export const WelcomePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/home');
  };
  return (
    <section className={styles.section}>
      <h1>Contacts App</h1>
      <p>
        Project was was designed to learn TypeScript, RTK, React-Routing v6.4
      </p>
      <h3>Further steps</h3>
      <ul className={styles.list}>
        <li>
          Add more features to contact card &#40;images, other info fileds&#41;
        </li>
        <li>Add DND functions in contact list</li>
        <li>Add authorization via FireBase</li>
      </ul>
      <p>
        To proceed hit <span>Главная</span> button in the navigation panel on
        the upper-left corner or
      </p>
      <div className={styles.button}>
        <Button text='Click here' type='button' buttonFunction={onClick} />
      </div>
    </section>
  );
};
