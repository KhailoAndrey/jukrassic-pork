import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n';
import App from './App';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from 'utils/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/jukrassic-pork">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
