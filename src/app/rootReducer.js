import { combineReducers } from 'redux'

import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  // Define a top-level state field named `counters`, handled by `counterReducer`
  counters: counterReducer,
  
})

export default rootReducer