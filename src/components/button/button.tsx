import { FC } from 'react';
import styles from './button.module.scss';
import { SyntheticEvent } from 'react';

interface IButton {
  buttonFunction?: (e: SyntheticEvent) => void;
  text: string;
  type: 'reset' | 'submit' | 'button';
  look: 'reset' | 'submit' | 'delete' | 'logout';
}

export const Button: FC<IButton> = ({ buttonFunction, text, type, look }) => {
  return (
    <button
      className={
        styles.btn +
        ' ' +
        `${
          look === 'reset'
            ? styles.reset
            : look === 'submit'
            ? styles.submit
            : look === 'logout'
            ? styles.logout
            : look === 'delete'
            ? styles.delete
            : ''
        }`
      }
      onClick={buttonFunction}
      type={type}
    >
      {text}
    </button>
  );
};
