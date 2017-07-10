import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import getUsersSaga from '../sagas/recipes.saga.js';

// mount it on the Store
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default function configureStore(initialState) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware),
        window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    ),
    runSaga: sagaMiddleware.run
  }
}
