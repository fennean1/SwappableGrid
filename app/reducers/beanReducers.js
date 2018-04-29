import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const redBeanCount = createReducer(0,{[types.INCREMENT_REDJELLYBEANS](state,action){
  return state+1;
}})
