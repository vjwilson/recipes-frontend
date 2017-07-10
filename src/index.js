import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { requestRecipes } from './actions/recipeActions';
import getUsersSaga from './sagas/recipes.saga.js';

import routes from './routes';

import './index.css';

const store = configureStore();
store.runSaga(getUsersSaga);
store.dispatch(requestRecipes());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
