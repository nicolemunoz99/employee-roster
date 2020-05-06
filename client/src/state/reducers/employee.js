import { 
  SET_EMPLOYEES, SELECT_EMPLOYEE, SET_SORT_OPTION
} from "../actions/action-types.js";
import _ from 'lodash';

const initEmployeeState = {
  roster: [],
  selected: {},
  sort: {
    option: 'Last_name',
    ascending: true
  }
};

const employeeReducer = (state = initEmployeeState, action) => {
  
  if (action.type === SET_EMPLOYEES) {
    return { ...state, roster: [...action.payload] };
  }

  if (action.type === SELECT_EMPLOYEE) {
    return { ...state, selected: action.payload._id === state.selected._id ? initEmployeeState.selected : action.payload };
  }

  if (action.type === SET_SORT_OPTION) {
    return { ...state, sort: {...state.sort, option: action.option }}
  }

  return state;
};

export default employeeReducer;