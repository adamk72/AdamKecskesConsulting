import { combineReducers } from 'redux';
import sociallistReducer from './sociallistReducer';

const rootReducer = combineReducers({
  socialInfo: sociallistReducer,
});

export default rootReducer;
