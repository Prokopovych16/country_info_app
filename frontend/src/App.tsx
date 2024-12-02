import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { MainPage } from './components/MainPage/MainPage.tsx';

export const App = () => {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}
