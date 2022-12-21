import { FC } from 'react';
import styles from './button.module.scss';
import { IButton } from '../../types/button-form';

export const Button: FC<IButton> = ({ buttonFunction, text }) => {
  return (
    <button className={styles.btn} onClick={buttonFunction}>
      {text}
    </button>
  );
};
