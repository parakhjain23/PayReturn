import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import {rootReducer} from './reducers/index';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
export {store};
export const persister = persistStore(store);
