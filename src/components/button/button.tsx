import { FC } from 'react';
import styles from './button.module.scss';
import { SyntheticEvent } from 'react';

interface IButton {
  buttonFunction?: (e: SyntheticEvent) => void;
  text: string;
  type: 'reset' | 'submit' | 'button';
}

export const Button: FC<IButton> = ({ buttonFunction, text, type }) => {
  return (
    <button
      className={
        styles.btn +
        ' ' +
        `${
          type === 'reset'
            ? styles.reset
            : type === 'submit'
            ? styles.submit
            : type === 'button'
            ? styles.button
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
