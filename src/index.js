import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import App from './App';
import Baselayout from './Baselayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route>
      <Route path='/' element={<Baselayout />} >
        <Route path='' element={<About/>} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='social' element={<Contact />} />
      </Route>
      )
      );

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      );
      reportWebVitals();
