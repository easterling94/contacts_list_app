import React, { useState } from 'react';
import { TInput } from '../../types/inputs';
import styles from './input.module.css';

export const Input: React.FC<TInput> = ({ placeholder, type, required }) => {
  const [loginValue, setLoginValue] = useState<string>('');
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
