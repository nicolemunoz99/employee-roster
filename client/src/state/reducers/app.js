import { 
  TOGGLE_MODAL, 
  CLOSE_ALL_MODALS, 
  LOGIN, 
  LOGOUT 
} from '../actions/action-types.js';

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

const initIsLoggedInState = false;

export const isLoggedInReducer = (state = initIsLoggedInState, action) => {
  if (action.type === LOGIN) {
    return true;
  }
  if (action.type === LOGOUT) {
    return false;
  }

  return state;
}

