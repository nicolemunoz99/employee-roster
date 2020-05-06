import { combineReducers } from 'redux';

import { modalReducer, isLoggedInReducer, redirectAfterLoginReducer, authStateReducer } from './app.js';
import formReducer from './form.js';
import employeeReducer from './employee.js';


export default combineReducers({
  form: formReducer,
  employee: employeeReducer,
  modal: modalReducer,
  isLoggedIn: isLoggedInReducer,
  redirectAfterLogin: redirectAfterLoginReducer,
  authState: authStateReducer
});