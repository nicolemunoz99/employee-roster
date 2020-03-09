import { ADD_EMPLOYEE, SELECT_EMPLOYEE, CHANGE_MODAL, UPDATE_EMPLOYEE, LOG_ERRORS } from "../constants/action-types.js";


const initialState = {
  employees: [],
  selectedEmployee: {},
  modal: {
    newEmployee: true,
    editEmployee: false
  },
  employeeData: {
    First_name: '',
    Last_name: '',
    MI: '',
    DOB: '',
    Hire_date: '',
    Status: ''
  },
  formErrors: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_EMPLOYEE) {
    return {...state, employees: [...state.employees, ...action.payload]};
  }

  if (action.type === SELECT_EMPLOYEE) {
    return {...state, selectedEmployee: action.payload};
  }

  if (action.type === CHANGE_MODAL) {
    return {...state, modal: { ...state.modal, [action.payload]: !state.modal[action.payload]}};
  }

  if (action.type === UPDATE_EMPLOYEE) {
    return {...state, employeeData: action.payload};
  }

  if (action.type === LOG_ERRORS) {
    return {...state, formErrors: action.payload};
  }

  return state;
};

export default rootReducer;