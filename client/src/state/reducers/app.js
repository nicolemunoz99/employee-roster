import { TOGGLE_MODAL } from '../actions/action-types.js';

const initModalState = {
  employeeForm: false,
  newEmployeeForm: false,
  editEmployee: false,
  submitResult: false,
  isWaitingForData: false,
  dataError: false
};


export const modalReducer = (state = initModalState, action) => {
  
  if (action.type === TOGGLE_MODAL) {
    return {...state,  [action.modalName]: !state[action.modalName] };
  }

  return state;
}

const initIsWaitingForData = false;

export const dataStatusReducer = (state = initIsWaitingForData, action) => {
  return state;
}

