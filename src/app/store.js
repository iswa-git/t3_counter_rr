
import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
//import rootReducer from './reducer'
import counterReducer2 from '../features/counter/counterSlice2';

 export const store = configureStore({ 
  reducer: {
    counter: counterReducer2,
  },
});