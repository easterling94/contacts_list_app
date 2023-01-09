import { FC } from 'react';
import styles from './button.module.scss';
import { SyntheticEvent } from 'react';

interface IButton {
  buttonFunction?: (e: SyntheticEvent) => void;
  text: string;
  type: 'cancel' | 'submit';
}

export const Button: FC<IButton> = ({ buttonFunction, text, type }) => {
  return (
    <button
      className={
        styles.btn +
        ' ' +
        `${
          type === 'cancel'
            ? styles.cancel
            : type === 'submit'
            ? styles.submit
            : ''
        }`
      }
      onClick={buttonFunction}
    >
      {text}
    </button>
  );
};
