import { FC } from 'react';
import styles from './button.module.scss';
import { SyntheticEvent } from 'react';

interface IButton {
  buttonFunction?: (e: SyntheticEvent) => void;
  text: string;
  type: 'reset' | 'submit';
}

export const Button: FC<IButton> = ({ buttonFunction, text, type }) => {
  return (
    <button
      className={
        styles.btn +
        ' ' +
        `${
          type === 'reset'
            ? styles.cancel
            : type === 'submit'
            ? styles.submit
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
