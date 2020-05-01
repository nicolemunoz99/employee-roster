import { 
  RESET_FORM, UPDATE_FORM, VALIDATE
} from "../actions/action-types.js";

import { isValid , errs} from './validators.js';

const initFormState = {
  data: {
    First_name: '',
    Last_name: '',
    MI: '',
    DOB: '',
    Hire_date: '',
    Status: ''
  },
  errors: {
    First_name: '',
    MI: '',
    Last_name: '',
    DOB: '',
    Hire_date: '',
    Status: ''
  },
  submitSuccess: null
}

const formReducer = (state = initFormState, action) => {
  
  if (action.type === UPDATE_FORM) {
    return { ...state, data: { ...state.data, ...action.dataObj }};
  }

  if (action.type === RESET_FORM) {
    return { ...initFormState };
  }

  if (action.type === VALIDATE) {
    let fieldNameArr = action.fieldNameArr ? action.fieldNameArr : Object.keys(state.errors);
    let updatedErrs = { ...state.errors };
    fieldNameArr.forEach((name) => {
      if ( !isValid[name](state.data[name])  ) updatedErrs[name] = errs[name];
      else updatedErrs[name] = initFormState.errors[name]
    });
    return { ...state, errors: updatedErrs };
  }

  return state;
};

export default formReducer;