import { ADD_EMPLOYEE } from "../constants/action-types.js";

const initialState = {
  employees: [],
  another: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_EMPLOYEE) {
    return {...state, employees: [...state.employees, ...action.payload]}
  }
  return state;
};

export default rootReducer;