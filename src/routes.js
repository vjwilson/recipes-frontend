import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './components/App/App';  //eslint-disable-line import/no-named-as-default
import HomePage from './components/Home/HomePage';
import CategoriesPage from './components/Categories/CategoriesPage';
import AdminPage from './components/Admin/AdminPage';
import RecipeEditPage from './components/RecipeEdit/RecipeEditPage';

import { authRetrieve } from './api/authApi';

function checkLogin(nextState, replace) {
  const profile = authRetrieve();

  if (!profile.token) {
    replace('/');
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="categories" component={CategoriesPage} />
    <Route path="admin" component={AdminPage} onEnter={checkLogin} />
    <Route path="recipe/new" component={RecipeEditPage} />
    <Route path="recipe/:id/edit" component={RecipeEditPage} />
  </Route>
);
