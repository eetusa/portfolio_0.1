import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SiteProvider } from './site-context';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
