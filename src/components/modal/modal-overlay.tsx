import { FC } from 'react';
import styles from './modal.module.css';
import { GrClose } from 'react-icons/gr';
import { useAppDispatch } from '../../hooks/redux';
import { ModalSlice } from '../../services/reducers/modal';
import React from 'react';

interface IOverlay {
  children?: React.ReactNode | undefined;
  closeBtn: boolean;
}

export const ModalOverlay: FC<IOverlay> = ({ children, closeBtn }) => {
  const dispatch = useAppDispatch();
  const { closeModal } = ModalSlice.actions;
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        {closeBtn ? (
          <div className={styles.closeIcon} onClick={handleClose}>
            <GrClose />
          </div>
        ) : (
          ''
        )}
        {children}
      </div>
    </div>
  );
};
