import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import styles from './error-page.module.css';
import { Button } from '../../components/button/button';

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.header}>{error.status}</h1>
        <p className={styles.description}>{error.statusText}</p>
        {error.statusText === 'Not Found' ? (
          <p>Похоже, указанной страницы не существует</p>
        ) : (
          ''
        )}
        <Link to='/'>
          <Button text='На главную' />
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        Опаньки... Что-то НАСТОЛЬКО плохо, что мы не придумали даже ошибку под
        такое.
      </div>
    );
  }
};
