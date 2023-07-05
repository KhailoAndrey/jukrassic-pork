import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n';
import App from './App';
import './index.scss';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/jukrassic-pork">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>      
    </BrowserRouter>
  </React.StrictMode>
);
