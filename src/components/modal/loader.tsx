import styles from './loader.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LoaderSlice } from '../../services/reducers/loader';

export const Loader = () => {
  const dispatch = useAppDispatch();
  const loaderTimer = useAppSelector((state) => state.loader.counter);
  const { changeCounter, closeLoader } = LoaderSlice.actions;

  useEffect(() => {
    if (loaderTimer >= 1) {
      setTimeout(() => {
        dispatch(changeCounter());
      }, 1000);
    } else {
      dispatch(closeLoader());
    }
    return;
  }, [loaderTimer]);

  const [dotToMove, setDotToMove] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDotToMove(!dotToMove);
    }, 200);
  }, [dotToMove]);

  return (
    <div>
      <h1 className={styles.header}>Обновляем данные...</h1>
      <div className={styles.wrapper}>
        <div className={styles.dotWrapper}>
          <div
            className={`${styles.dot} + ${
              dotToMove ? styles.dot1 : styles.dot1_upp
            }`}
          ></div>
          <div
            className={`${styles.dot} + ${
              dotToMove ? styles.dot2 : styles.dot2_upp
            }`}
          ></div>
          <div
            className={`${styles.dot} + ${
              dotToMove ? styles.dot3 : styles.dot3_upp
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
