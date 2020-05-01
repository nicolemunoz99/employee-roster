import { 
  RESET_FORM, UPDATE_FORM, UPDATE_FIELD, VALIDATE_FIELD, SET_FORM_IS_VALID
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
  formIsValid: false
}

const formReducer = (state = initFormState, action) => {

  if (action.type === UPDATE_FIELD) {
    let { fieldName, value } = action.data;
    // limit input size
    if (fieldName === 'MI' && value.length > 1) return state;
    else if (value.length > 15) return state;
    else return { ...state, data: { ...state.data, [fieldName]: value} };
  }
  
  if (action.type === UPDATE_FORM) {
    return { ...state, data: { ...state.data, ...action.dataObj }};
  }

  if (action.type === RESET_FORM) {
    return { ...initFormState };
  }

  if (action.type === VALIDATE_FIELD) {
    let fieldNameArr = action.fieldNameArr ? action.fieldNameArr : Object.keys(state.errors);
    let updatedErrs = { ...state.errors };
    fieldNameArr.forEach((name) => {
      if ( !isValid[name](state.data[name])  ) updatedErrs[name] = errs[name];
      else updatedErrs[name] = initFormState.errors[name]
    });
    return { ...state, errors: updatedErrs };
  }

  if (action.type === SET_FORM_IS_VALID) {
    return { ...state, formIsValid: action.isValid };
  }

  return state;
};

export default formReducer;