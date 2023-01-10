import React, { SyntheticEvent, FormEvent } from 'react';
import styles from './input.module.css';

interface TInput {
  type: string;
  placeholder: string;
  required?: boolean;
  value: string | undefined;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<TInput> = ({
  placeholder,
  type,
  required,
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
      />
    </div>
  );
};
