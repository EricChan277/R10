import { combineReducers } from 'redux';
import favesReducer from './modules/faves';

export default combineReducers({
  faveData: favesReducer
});
