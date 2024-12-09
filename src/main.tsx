import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
