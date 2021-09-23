import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MerryCreations } from './components/MerryCreations';
//import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')

const reactBaseTemplate = (<React.StrictMode>
  <BrowserRouter>
    <MerryCreations />
  </BrowserRouter>
</React.StrictMode>);

ReactDOM.render(
  reactBaseTemplate,

  rootElement
);

reportWebVitals();
