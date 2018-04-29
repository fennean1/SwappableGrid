import { combineReducers } from 'redux';
import * as beanReducer from './beanReducers'

export default combineReducers(Object.assign(
  beanReducer,
));
