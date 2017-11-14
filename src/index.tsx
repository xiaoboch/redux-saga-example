import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import App from './components/app';
import filmReducer from './reducers/search_reducer';
import { FilmState } from './types';

// const sagaMiddleware = createSagaMiddleware(rootSaga)
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
//
const preloadState = new FilmState([], false, '');

const sagaMiddleware = createSagaMiddleware();
const store = createStore<FilmState>(
    filmReducer,
    preloadState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container') as HTMLElement);
