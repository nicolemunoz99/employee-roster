import { 
  SET_EMPLOYEES, 
  SELECT_EMPLOYEE, 
  TOGGLE_MODAL,
  UPDATE_FIELD, UPDATE_FORM, VALIDATE_FIELD, SET_FORM_IS_VALID, RESET_FORM, 
  UPDATE_EMPLOYEES 
} from './action-types.js';
import axios from 'axios';
import _ from 'lodash';

export const setEmployees = (payload) => {
  return { type: SET_EMPLOYEES, payload };
};

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload };
};

export const toggleModal = (modalName) => {
  return { type: TOGGLE_MODAL, modalName };
};

export const resetForm = (payload) => {
  return { type: RESET_FORM, payload };
};

export const updateEmployees = (payload) => {
  return { type: UPDATE_EMPLOYEES, payload };
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
    let employees = (await axios.get(`${process.env.API}/employee`)).data;
    dispatch(setEmployees(employees));
    dispatch(toggleModal('isWaitingForData'));
  }
  catch {
    dispatch(toggleModal('dataError'));
  }

};

export const submitNewEmployee = () => async (dispatch, getState) => {
  try {  
    dispatch(toggleModal('isWaitingForData'));
    let formIsValid = getState().form.formIsValid;
    if (!formIsValid) return;
    let newEmployee = getState().form.data;

    await axios.post(`${process.env.API}/employee`, newEmployee);
    
    dispatch(toggleModal('newEmployeeForm'));
    dispatch(toggleModal('isWaitingForData'));
  }
  catch {
    dispatch(toggleModal('dataError'));
  }
  
  await dispatch(getAllEmployees());
  dispatch(toggleModal('success'));
};

export const submitEditedEmployee = () => async (dispatch, getState) => {
  try {
    dispatch(toggleModal('isWaitingForData'));
    let formIsValid = getState().form.formIsValid;
    if (!formIsValid) return;
    let updatedEmployee = getState().form.data;
    
    await axios.put(`${process.env.API}/employee/${updatedEmployee._id}`, updatedEmployee);
    
    dispatch(toggleModal('editEmployeeForm'));
    dispatch(toggleModal('isWaitingForData'));
  }
  catch {
    dispatch(toggleModal('dataError'));
  }

  await dispatch(getAllEmployees());
  dispatch(toggleModal('success'));
};

export const validateForm = () => (dispatch, getState) => {
  dispatch(validateField());
  let errors = getState().form.errors;
  if ( !(_.every(errors, (err) => !err)) ) dispatch(setFormIsValid(false));
  else dispatch(setFormIsValid(true));
}

export const toggleEmployeeStatus = () => (dispatch, getState) => {

}