import React from 'react';
import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import
// 'bootstrap-css-only/css/bootstrap.min.css'; 
// import
// 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/data/style/app.css';
import App from './App';
import { SiteProvider } from './api/site-context';


ReactDOM.render(
  
    <SiteProvider>
      <App />
    </SiteProvider>
  ,
  document.getElementById('root')
);
