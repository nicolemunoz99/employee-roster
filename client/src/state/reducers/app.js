import { TOGGLE_MODAL } from '../actions/action-types.js';

const initModalState = {
  employeeForm: false,
  newEmployee: false,
  editEmployee: false,
  submitResult: false,
  dataStatus: false
}


export const modalReducer = (state = initModalState, action) => {
  
  if (action.type === TOGGLE_MODAL) {
    console.log('action.modalName', action, action.modalName)
    return {...state,  [action.modalName]: !state[action.modalName] };
  }

  return state;
}

const initDataStatusState = 'ok'

export const dataStatusReducer = (state = initDataStatusState, action) => {
  return state;
}

