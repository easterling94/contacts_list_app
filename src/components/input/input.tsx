import React, { useState } from 'react';
import styles from './input.module.css';

interface TInput {
  type: string;
  placeholder: string;
  value: string | undefined;
  required?: boolean;
}

export const Input: React.FC<TInput> = ({
  placeholder,
  type,
  required,
  value,
}) => {
  const [loginValue, setLoginValue] = useState(value);
  return (
    <input
      className={styles.input}
      type={type}
      name='login'
      value={loginValue}
      onChange={(e: React.FormEvent<HTMLInputElement>): void =>
        setLoginValue(e.currentTarget.value)
      }
      placeholder={placeholder}
      required={required}
    />
  );
};
