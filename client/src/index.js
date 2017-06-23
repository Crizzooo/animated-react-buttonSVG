import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.js';

//load main css
import './public/stylesheets/index.scss';

ReactDOM.render(
  (<BrowserRouter>
        <App />
    </BrowserRouter>
  ),
  document.getElementById('app'));
