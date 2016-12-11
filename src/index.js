import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

import {getRecipes} from './api/recipeApi';


getRecipes().then((result) => {
  ReactDOM.render(
    <App recipes={result} />,
    document.getElementById('app')
  );
});
