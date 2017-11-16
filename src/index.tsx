import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import App from './components/app';
import filmReducer from './reducers/index';
import {AppState, FilmState} from './types';

// const sagaMiddleware = createSagaMiddleware(rootSaga)
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
//
const filmState  = new FilmState([], false, '');
const preloadState = {filmState: filmState};

const sagaMiddleware = createSagaMiddleware();
const store = createStore<AppState>(
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
