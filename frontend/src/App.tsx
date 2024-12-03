import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { MainPage } from './components/MainPage/MainPage.tsx';
import { CountryInfo } from './components/CountryInfo/CountryInfo.tsx';

export const App = () => {
  return (
    <div className="App">
      <main className="p-12">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/country/:countryCode" element={<CountryInfo />}></Route>
        </Routes>
      </main>
    </div>
  );
};
