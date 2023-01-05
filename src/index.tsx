import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/error-page/error-page';
import { HomePage } from './pages/home/home';
import { LoginPage } from './pages/login-page/login';
import { WelcomePage } from './pages/welcome-page';
import { ContactInfo } from './pages/home/home';
import { store } from './services/store';
import { Provider } from 'react-redux';

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
            path: ':contactId',
            element: <ContactInfo />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
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
