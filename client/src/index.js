import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Authentication from './components/Authentication';

const App = lazy(() => import('./App'));
const AnimePage = lazy(() => import('./components/AnimePage'));
const AddAnimeForm = lazy(() => import('./components/AddAnimeForm'));
const AddCharacterForm = lazy(() => import('./components/AddCharacterForm'));
const LoginForm = lazy(() => import('./components/LoginForm'));
const WatchList = lazy(() => import('./components/WatchList'));

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Layout><Suspense fallback={<div>Loading...</div>}><App /></Suspense></Layout>
  },
  {
    path: '/anime/:animeId',
    element: <Layout><Suspense fallback={<div>Loading...</div>}><AnimePage /></Suspense></Layout>
  },
  {
    path: '/anime/add',
    element: <Layout><Suspense fallback={<div>Loading...</div>}><AddAnimeForm /></Suspense></Layout>
  },
  {
    path: '/characters/add',
    element: <Layout><Suspense fallback={<div>Loading...</div>}><AddCharacterForm /></Suspense></Layout>
  },
  {
    path: '/login',
    element: <Suspense fallback={<div>Loading...</div>}><LoginForm /></Suspense>
  },
  {
    path: '/',
    element: <Authentication />
  },
  {
    path:'/user/watchList',
    element: <Layout><Suspense fallback={<div>Loading...</div>}><WatchList/></Suspense></Layout>
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
