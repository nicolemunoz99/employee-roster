import { combineReducers } from 'redux';

import { modalReducer } from './app.js';
import formReducer from './form.js';
import employeeReducer from './employee.js';


export default combineReducers({
  form: formReducer,
  employee: employeeReducer,
  modal: modalReducer
});