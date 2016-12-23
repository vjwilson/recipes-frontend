import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';  //eslint-disable-line import/no-named-as-default
import HomePage from './components/Home/HomePage';
import CategoriesPage from './components/Categories/CategoriesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="categories" component={CategoriesPage} />
  </Route>
);
