import styles from './App.module.css';
import { Navigation } from '../navigation/navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUsers } from '../../services/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Modal } from '../modal/modal';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const isModalOpened = useAppSelector((state) => state.modal.isModalOpened);
  return (
    <div className={styles.body}>
      <Navigation />
      {isModalOpened ? <Modal /> : ''}
      <Outlet />
    </div>
  );
}

export default App;
