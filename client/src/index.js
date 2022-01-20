import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);
