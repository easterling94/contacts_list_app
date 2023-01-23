import styles from './App.module.css';
import { Navigation } from '../navigation/navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUser } from '../../services/reducers/ActionCreators';
import { useAppDispatch } from '../../hooks/redux';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className={styles.body}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
