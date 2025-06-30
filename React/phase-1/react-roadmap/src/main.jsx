import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Navbar from './topics/11-router/Navbar.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
