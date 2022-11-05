import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Property from './pages/Property';
import About from './pages/About';
import DefaultLayout from './layout/DefaultLayout'
import ErrorPage from './pages/error-page';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" sle
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/property/1",
        element: <Property />
      },
      {
        path: "/a-propos",
        element: <About />
      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
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
reportWebVitals(console.log);
