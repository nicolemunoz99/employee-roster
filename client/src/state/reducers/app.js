import { TOGGLE_MODAL } from '../actions/action-types.js';

const initModalState = {
  newEmployeeForm: false,
  editEmployee: false,
  success: false,
  isWaitingForData: false,
  dataError: false,
  confirmToggleStatus: false
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

