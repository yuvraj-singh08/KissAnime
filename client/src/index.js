import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnimePage from './components/AnimePage';
import AddAnimeForm from './components/AddAnimeForm';
import AddCharacterForm from './components/AddCharacterForm';
import LoginForm from './components/LoginForm';
import Layout from './components/Layout';
import Authentication from './components/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/anime/:animeId',
    element: <AnimePage />
  },
  {
    path: '/anime/add',
    element: <AddAnimeForm />
  },
  {
    path: '/characters/add',
    element: <AddCharacterForm />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/authentication',
    element: <Authentication />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
