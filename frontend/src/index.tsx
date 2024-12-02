import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter for routing
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
