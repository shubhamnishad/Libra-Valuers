import {combineReducers} from 'redux';
import docReducer, {
  formReducer,
  photoReducer,
  docAddReducer,
  photoPathSetReducer,
} from '../redux/reducer';

const rootReducer = combineReducers({
  docReducer,
  formReducer,
  photoReducer,
  docAddReducer,
});

export default rootReducer;
