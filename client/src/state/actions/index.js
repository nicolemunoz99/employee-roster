import { 
  SET_EMPLOYEES, SELECT_EMPLOYEE, SET_SORT_OPTION, TOGGLE_ORDER,
  SET_REDIRECT, SET_AUTH_STATE, SET_LOGIN_ERR,
  TOGGLE_MODAL, CLOSE_ALL_MODALS, 
  UPDATE_FIELD, UPDATE_FORM, VALIDATE_FIELD, SET_FORM_IS_VALID, RESET_FORM
} from './action-types.js';
import axios from 'axios';
import _ from 'lodash';

// ... auth stuff ...
import Amplify, { Auth } from "aws-amplify";
import config from "../../../../aws-exports.js";
Amplify.configure(config);


// ... ACTIONS ....

// ... employees ...

export const setEmployees = (payload) => {
  return { type: SET_EMPLOYEES, payload };
};

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload };
};

export const setSortOption = (option) => {
  return { type: SET_SORT_OPTION, option };
};

export const toggleOrder = (ascending) => {
  return{ type: TOGGLE_ORDER, ascending };
};


// ... login status ...

export const setRedirect = (redirectRoute) => {
  return { type: SET_REDIRECT, redirectRoute };
};

export const setAuthState2 = (authState) => {
  return { type: SET_AUTH_STATE, authState };
};

export const setLoginErr = (error) => {
  return { type: SET_LOGIN_ERR, error };
};

// ... modals ...

export const toggleModal = (modalName) => {
  return { type: TOGGLE_MODAL, modalName };
};

export const closeAllModals = () => {
  return { type: CLOSE_ALL_MODALS };
};

// new/edit employee form

export const resetForm = (payload) => {
  return { type: RESET_FORM, payload };
};

export const updateField = (data) => {
  return { type: UPDATE_FIELD, data };
};

export const updateForm = (dataObj) => {
  return { type: UPDATE_FORM, dataObj };
};

export const validateField = (fieldNameArr) => {
  return { type: VALIDATE_FIELD, fieldNameArr };
};

export const setFormIsValid = (isValid) => {
  return { type: SET_FORM_IS_VALID, isValid };
};

// ...async/thunks...

export const getAllEmployees = () => async (dispatch) => {
  try {
    dispatch(toggleModal('isWaitingForData'));
    let tokenHeader = await getTokens();
    let employees = (await axios.get(`${process.env.API}/employee`, tokenHeader)).data;
    dispatch(setEmployees(employees));
    dispatch(sortEmployees());
    dispatch(toggleModal('isWaitingForData'));
  }
  catch {
    dispatch(toggleModal('dataError'));
  }

};

export const submitNewEmployee = () => async (dispatch) => {
  const apiRequest = async (data) => {
    let tokenHeader = await getTokens();
    await axios.post(`${process.env.API}/employee`, data, tokenHeader);
  }
  await dispatch(sendForm(apiRequest, 'new'));
};

export const submitEditedEmployee = () => async (dispatch) => {
  await dispatch(sendForm(editEmpRequest, 'edit'));
};

const sendForm = (apiRequest2, formType) => async(dispatch, getState) => {
  try {
    dispatch(toggleModal('isWaitingForData'));

    let formIsValid = getState().form.formIsValid;
    if (!formIsValid) return;
    let data = getState().form.data;
    await apiRequest2(data);
    
    dispatch(toggleModal(`${formType}EmployeeForm`));
    dispatch(toggleModal('isWaitingForData'));
    await dispatch(getAllEmployees());
    
    dispatch(toggleModal('success'));
  }
  catch {
    dispatch(toggleModal('dataError'));
  }

};

export const validateForm = () => (dispatch, getState) => {
  dispatch(validateField());
  let errors = getState().form.errors;
  if ( !(_.every(errors, (err) => !err)) ) dispatch(setFormIsValid(false));
  else dispatch(setFormIsValid(true));
};

export const confirmToggleStatus = () => async (dispatch, getState) => {
  try {
    dispatch(toggleModal('isWaitingForData')); // show 'waiting' modal
    let { _id, Status } = getState().employee.selected;
    Status = Status === 'active' ? 'inactive' : 'active';
    await editEmpRequest({ _id, Status });
    dispatch(toggleModal('confirm')); // close 'confirm' modal
    dispatch(toggleModal('isWaitingForData')); // close 'waiting' modal
    dispatch(toggleModal('success')); // show 'success' modal
    await dispatch(getAllEmployees());
  }

  catch {
    dispatch(toggleModal('dataError'));
  }
};


export const sortEmployees = () => (dispatch, getState) => {
  let { roster, sort: {option, ascending} } = getState().employee;
  roster.sort((a, b) => {
    let aCheck = a[option].toLowerCase();
    let bCheck = b[option].toLowerCase();
    if (ascending) return aCheck > bCheck ? 1 : -1;
    return  aCheck < bCheck ? 1 : -1;
  });
  dispatch(setEmployees(roster));
};


// ... vanilla helpers

const editEmpRequest = async (data) => {
  let tokenHeader = await getTokens();
  await axios.put(`${process.env.API}/employee/${data._id}`, data, tokenHeader);
};

const getTokens = async () => {
  try {
    let authData = await Auth.currentAuthenticatedUser();
    return {
      headers: { accesstoken: authData.signInUserSession.accessToken.jwtToken }
    };
  }
  catch {
    dispatch(toggleModal('dataError'));
  }
};