import styles from './welcome-page.module.css';
import { Button } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
export const WelcomePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/contacts');
  };
  return (
    <section className={styles.section}>
      <h1>Contacts App</h1>
      <p>
        Функционал проекта: регистрация, ведение персонализированной страницы
        своих контактов
      </p>
      <h3>Дальнейшие шаги</h3>
      <ul className={styles.list}>
        <li>
          Возможность добавлять прочую информацию в карточку контакта &#40;фото,
          год рождения, избранный контакт и прочее&#41;
        </li>
        <li>Добавить поиска по контактам</li>
        <li>Возможность делиться контактами с другими пользователями</li>
        <li>
          Возможность добавлять других пользователей в свой список контактов
        </li>
      </ul>
      <p>
        Чтобы пользоваться приложением нажмите <span>Главная</span> на панели
        навигации или
      </p>
      <div className={styles.button}>
        <Button
          text='Сюда'
          type='button'
          buttonFunction={onClick}
          look='submit'
        />
      </div>
    </section>
  );
};
