import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import reducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);
/* eslint-enable */
sagaMiddleware.run(mySaga);
export default store;
