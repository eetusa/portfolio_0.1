import React from 'react';
import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import
// 'bootstrap-css-only/css/bootstrap.min.css'; 
// import
// 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import App from './App';
import { SiteProvider } from './site-context';


ReactDOM.render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
