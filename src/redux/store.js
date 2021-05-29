import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../redux/rootReducer';
import {photoReducer} from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['docReducer', 'formReducer', 'photoReducer', 'docAddReducer'],
};
const persistedReduce = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReduce);
const persistor = persistStore(store);

export {store, persistor};
