import { 
  LOG_ERRORS, RESET_FORM, UPDATE_EMPLOYEES 
} from "../actions/action-types.js";

const initFormState = {
  data: '',
  errors: [],
  submitSuccess: null
}

const formReducer = (state = initFormState, action) => {
  if (action.type === LOG_ERRORS) {
    return { ...state, errors: action.payload };
  }

  if (action.type === RESET_FORM) {
    return { ...initFormState };
  }

  return state;
};

export default formReducer;