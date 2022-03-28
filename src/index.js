import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Recovery from './routes/RecoveryPage'
// import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
import About from './routes/About';
import Questions from './routes/Question';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/questions' element={<Questions />} />


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);