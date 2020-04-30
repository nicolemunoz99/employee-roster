import { 
  SET_EMPLOYEES, SELECT_EMPLOYEE
} from "../actions/action-types.js";

const initEmployeeState = {
  roster: [],
  selected: {}
};

const employeeReducer = (state = initEmployeeState, action) => {
  if (action.type === SET_EMPLOYEES) {
    return { ...state, roster: [...action.payload] };
  }

  if (action.type === SELECT_EMPLOYEE) {
    return { ...state, selected: action.payload._id === state.selected._id ? initEmployeeState.selected : action.payload };
  }

  return state;
};

export default employeeReducer;