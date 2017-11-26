import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import routes from './routes';
import App from './components/App/App';  //eslint-disable-line import/no-named-as-default

import './index.css';


render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);
