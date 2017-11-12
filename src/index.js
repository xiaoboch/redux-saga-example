import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'

import App from './components/app';
import reducers from './reducers';

// const sagaMiddleware = createSagaMiddleware(rootSaga)
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
//

const sagaMiddleware = createSagaMiddleware(rootSaga)
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
