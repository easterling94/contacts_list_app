import React from 'react';
import styles from './input.module.css';

type TInput = 'email' | 'text' | 'password';

interface IInput {
  type: TInput;
  placeholder: string;
  required?: boolean;
  refProp?: React.MutableRefObject<null>;
  value: string | undefined;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  type,
  required,
  refProp,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputBlock}>
      <label className={styles.inputLabel}>{placeholder}</label>
      <input
        className={styles.input}
        type={type}
        name='login'
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={required}
        ref={refProp}
      />
    </div>
  );
};
