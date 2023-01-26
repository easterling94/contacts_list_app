import styles from './App.module.css';
import { Navigation } from '../navigation/navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUser } from '../../services/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ModalOverlay } from '../../components/modal/modal-overlay';
import { ModalDelete } from '../../components/modal/modal-delete';
import { ModalEdit } from '../../components/modal/modal-edit';
import { ModalNew } from '../../components/modal/modal-new';
import { Loader } from '../../components/modal/loader';
import { ModalDeleteUser } from '../modal/modal-delete-user';
import { LogOut } from '../modal/modal-logout';

function App() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);
  const isLoaderShown = useAppSelector((state) => state.loader.isLoaderShown);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className={styles.body}>
      <Navigation />
      <Outlet />
      {modal.isModalOpened ? (
        <ModalOverlay closeBtn={true}>
          {modal.modalType === 'edit' ? (
            <ModalEdit />
          ) : modal.modalType === 'delete' ? (
            <ModalDelete />
          ) : modal.modalType === 'add' ? (
            <ModalNew />
          ) : modal.modalType === 'deleteUser' ? (
            <ModalDeleteUser />
          ) : modal.modalType === 'logout' ? (
            <LogOut />
          ) : (
            ''
          )}
        </ModalOverlay>
      ) : (
        ''
      )}
      {isLoaderShown ? (
        <ModalOverlay closeBtn={false}>
          <Loader />
        </ModalOverlay>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
