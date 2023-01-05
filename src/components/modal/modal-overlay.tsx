import { FC } from 'react';
import { IOverlay } from '../../types/overlay';
import styles from './modal.module.css';
import { GrClose } from 'react-icons/gr';

export const ModalOverlay: FC<IOverlay> = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.closeIcon}>
          <GrClose />
        </div>
        {children}
      </div>
    </div>
  );
};
