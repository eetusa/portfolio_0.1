import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/data/style/app.css';
import "react-image-gallery/styles/css/image-gallery.css";
import App from './App';
import { SiteProvider } from './api/site-context';

ReactDOM.render(
  
    <SiteProvider>
      <App />
    </SiteProvider>
  ,
  document.getElementById('root')
);
