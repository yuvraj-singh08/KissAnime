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
import WatchList from './components/WatchList';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Layout><App /></Layout>
  },
  {
    path: '/anime/:animeId',
    element: <Layout><AnimePage /></Layout>
  },
  {
    path: '/anime/add',
    element: <Layout><AddAnimeForm /></Layout>
  },
  {
    path: '/characters/add',
    element: <Layout><AddCharacterForm /></Layout>
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/',
    element: <Authentication />
  },
  {
    path:'/user/watchList',
    element: <Layout><WatchList/></Layout>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
