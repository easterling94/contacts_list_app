import styles from './welcome-page.module.css';
import { Button } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
export const WelcomePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/contacts');
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1 className={styles.header}>Contacts App</h1>
        <p>
          Функционал проекта: регистрация, ведение персонализированной страницы
          своих контактов
        </p>
        <h3>Использование</h3>
        <ul className={styles.list}>
          <li>Регистрация работает в том числе с фиктивной почтой</li>
          <li>
            Запомните пароль, из-за первого пункта отсутствует система
            восстановления пароля
          </li>
          <li>
            Сначала у вас будет пустой лист контактов. Можно добавлять, удалять,
            вносить изменения в свои контакты
          </li>
          <li>Можно также удалить свой аккаунт в личном кабинете</li>
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
    </div>
  );
};
