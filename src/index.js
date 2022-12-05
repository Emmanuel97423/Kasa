import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import House from './pages/House';
import About from './pages/About';
import ErrorPage from './pages/Error';
import App from './App';

const router = createBrowserRouter([
      {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        index: true,
                        element: <Home />,
                  },
                  {
                        path: '/property/:id',
                        element: <House />,
                  },
                  {
                        path: '/a-propos',
                        element: <About />,
                  },
            ],
      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
);
