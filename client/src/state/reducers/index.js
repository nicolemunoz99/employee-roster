import { combineReducers } from 'redux';

import { modalReducer, dataStatusReducer } from './app.js';
import formReducer from './form.js';
import employeeReducer from './employee.js';

// function rootReducer(state = initialState, action) {
  
  
//   if (action.type === UPDATE_EMPLOYEES) {
//     // success modal
//     return {
//             ...state, 
//             employees: [...action.payload], 
//             modal:  {...state.modal, submitResult: true}
//             };
//   }

//   return state;
// };

export default combineReducers({
  form: formReducer,
  employee: employeeReducer,
  modal: modalReducer,
  dataStatus: dataStatusReducer
});