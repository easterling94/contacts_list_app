import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/error-page/error-page';
import { HomePage } from './pages/contacts/contacts';
import { NoContactChosen } from './pages/contacts/no-contact-chosen';
import { RegistrationPage } from './pages/auths-page/registration';
import { LoginPage } from './pages/auths-page/login-page';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { ContactInfo } from './pages/contacts/contacts';
import { store } from './services/store';
import { Provider } from 'react-redux';
import { ProfilePage } from './pages/profile-page/profile-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'home/',
        element: <HomePage />,
        children: [
          {
            path: ':contactShortcut',
            element: <ContactInfo />,
          },
          {
            path: '',
            element: <NoContactChosen />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
