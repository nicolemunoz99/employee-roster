import { 
  LOG_ERRORS, RESET_FORM, UPDATE_FORM
} from "../actions/action-types.js";

const initFormState = {
  data: {
    First_name: '',
    Last_name: '',
    MI: '',
    DOB: '',
    Hire_date: '',
    Status: ''
  },
  errors: [],
  submitSuccess: null
}

const formReducer = (state = initFormState, action) => {
  
  if (action.type === UPDATE_FORM) {
    return { ...state, data: { ...state.data, ...action.dataObj }}
  }
  
  if (action.type === LOG_ERRORS) {
    return { ...state, errors: action.payload };
  }

  if (action.type === RESET_FORM) {
    return { ...initFormState };
  }

  return state;
};

export default formReducer;