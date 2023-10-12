import React, { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { MainPageAsync } from 'pages/MainPage/MainPageAsync';
// import { AboutPageAsync } from 'pages/AboutPage/AboutPageAsync';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from './providers';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainPage />} path={'/'} />
          <Route element={<AboutPage />} path={'/about'} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
