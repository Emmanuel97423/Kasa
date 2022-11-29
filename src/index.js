import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import House from './pages/House';
import About from './pages/About';
// import DefaultLayout from './layout/Default';
import ErrorPage from './pages/Error';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" sle
//   )
// )

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

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Route>
//         <App />

//       </Route>

//     </Router>

//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
