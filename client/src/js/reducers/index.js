import { 
  ADD_EMPLOYEES, SELECT_EMPLOYEE, TOGGLE_MODAL, 
  LOG_ERRORS, RESET_FORM, UPDATE_EMPLOYEES } from "../constants/action-types.js";

const initialState = {
  employees: [],
  selectedEmployee: {},
  modal: {
    newEmployee: false,
    editEmployee: false
  },
  formErrors: []
};

function rootReducer(state = initialState, action) {
  
  if (action.type === ADD_EMPLOYEES) {
    return {...state, employees: [...action.payload]};
  }

  if (action.type === SELECT_EMPLOYEE) {
    return {...state, selectedEmployee: action.payload};
  }

  if (action.type === TOGGLE_MODAL) {
    return {...state, modal: { ...state.modal, [action.payload]: !state.modal[action.payload] }};
  }

  if (action.type === LOG_ERRORS) {
    return {...state, formErrors: action.payload};
  }

  if (action.type === RESET_FORM) {
    return {
            ...state, 
            employeeData: initialState.employeeData,
            formErrors: initialState.formErrors,
            modal: initialState.modal
    };
  }

  if (action.type === UPDATE_EMPLOYEES) {
    console.log('action.payload in reducer:', action.payload)
    // success modal
    return {...state, employees: [...action.payload]};
  }

  return state;
};

export default rootReducer;