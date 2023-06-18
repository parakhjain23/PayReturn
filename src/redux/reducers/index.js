import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};
const rootReducer = combineReducers({});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
