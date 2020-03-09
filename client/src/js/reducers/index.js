import { ADD_EMPLOYEE, SELECT_EMPLOYEE, CHANGE_MODAL, UPDATE_EMPLOYEE } from "../constants/action-types.js";


const initialState = {
  employees: [],
  selectedEmployee: {},
  modal: {
    newEmployee: true,
    editEmployee: false
  },
  employeeData: {
    first_name: '',
    Last_name: '',
    MI: '',
    DOB: '',
    Hire_date: '',
    Status: ''
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_EMPLOYEE) {
    return {...state, employees: [...state.employees, ...action.payload]};
  }

  if (action.type === SELECT_EMPLOYEE) {
    return {...state, selectedEmployee: action.payload};
  }

  if (action.type === CHANGE_MODAL) {
    return {...state, modal: { ...state.modal, [action.payload]: !state.modal[action.payload]}}; //state.activeModal.length ? "" : action.paylod
  }

  if (action.type === UPDATE_EMPLOYEE) {
    return {...state, employeeData: action.payload}
  }

  return state;
};

export default rootReducer;