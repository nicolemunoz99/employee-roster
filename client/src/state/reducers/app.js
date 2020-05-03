import { TOGGLE_MODAL, CLOSE_ALL_MODALS } from '../actions/action-types.js';

const initModalState = {
  newEmployeeForm: false,
  editEmployee: false,
  success: false,
  isWaitingForData: false,
  dataError: false,
  confirm: false
};


export const modalReducer = (state = initModalState, action) => {
  
  if (action.type === TOGGLE_MODAL) {
    return { ...state,  [action.modalName]: !state[action.modalName] };
  }

  if (action.type === CLOSE_ALL_MODALS) {
    return { initModalState }
  }

  return state;
}

// const initIsWaitingForData = false;

// export const dataStatusReducer = (state = initIsWaitingForData, action) => {
//   return state;
// }

