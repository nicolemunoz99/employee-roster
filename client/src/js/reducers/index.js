import { ADD_EMPLOYEE, SELECT_EMPLOYEE, TOGGLE_MODAL, UPDATE_EMPLOYEE, LOG_ERRORS, RESET_FORM } from "../constants/action-types.js";


const initialState = {
  employees: [],
  selectedEmployee: {},
  modal: {
    newEmployee: false,
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

  if (action.type === TOGGLE_MODAL) {
    return {...state, modal: { ...state.modal, [action.payload]: !state.modal[action.payload]}};
  }

  if (action.type === UPDATE_EMPLOYEE) {
    return {...state, employeeData: action.payload};
  }

  if (action.type === LOG_ERRORS) {
    return {...state, formErrors: action.payload};
  }

  if (action.type === RESET_FORM) {
    return {
            ...state, 
            employeeData: initialState.employeeData,
            formErrors: initialState.formErrors
    };
  }

  return state;
};

export default rootReducer;