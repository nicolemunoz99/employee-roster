import { 
  TOGGLE_MODAL, 
  CLOSE_ALL_MODALS, 
  SET_REDIRECT,
  LOGIN, 
  LOGOUT,
  SET_AUTH_STATE,
  SET_LOGIN_ERR
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

// const initIsLoggedInState = false;

// export const isLoggedInReducer = (state = initIsLoggedInState, action) => {
//   if (action.type === LOGIN) {
//     return true;
//   }
//   if (action.type === LOGOUT) {
//     return false;
//   }

//   return state;
// }

const initRedirectAfterLogin = '';
export const redirectAfterLoginReducer = (state = initRedirectAfterLogin, action) => {
  if (action.type === SET_REDIRECT) {
    return action.redirectRoute;
  }

  return state;
}

const initAuthState = '';
export const authStateReducer = (state = initAuthState, action) => {
  if (action.type === SET_AUTH_STATE) {
    return action.authState;
  }
  return state;
};

const initLoginErr = '';
export const loginErrReducer = (state = initLoginErr, action) => {
  if (action.type === SET_LOGIN_ERR) {
    return action.error;
  };
  return state;
}

