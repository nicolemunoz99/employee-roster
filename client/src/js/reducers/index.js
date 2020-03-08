import { ADD_EMPLOYEE, SELECT_EMPLOYEE } from "../constants/action-types.js";

const initialState = {
  employees: [],
  selectedEmployee: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_EMPLOYEE) {
    return {...state, employees: [...state.employees, ...action.payload]}
  }

  if (action.type === SELECT_EMPLOYEE) {
    return {...state, selectedEmployee: action.payload}
  }
  return state;
};

export default rootReducer;