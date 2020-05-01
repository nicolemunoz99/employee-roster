import { 
  SET_EMPLOYEES, 
  SELECT_EMPLOYEE, 
  TOGGLE_MODAL,
  TOGGLE_DATA_STATUS, 
  UPDATE_FORM, VALIDATE, RESET_FORM, 
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

export const updateForm = (dataObj) => {
  return { type: UPDATE_FORM, dataObj };
};

export const validate = (fieldNameArr) => {
  return { type: VALIDATE, fieldNameArr };
};

// ...async/thunks...

export const getAllEmployees = () => async (dispatch) => {
  let employees = (await axios.get(`${process.env.API}/employee`)).data;
  dispatch(setEmployees(employees));
};

export const submitNewEmployee = () => async (dispatch, getState) => {
  dispatch(validate());
  let errors = getState().form.errors;
  if ( !(_.every(errors, (err) => !err)) ) {
    return;
  }

  let newEmployee = getState().form.data;
  await axios.post(`${process.env.API}/employee`, newEmployee);
  await dispatch(getAllEmployees());
  dispatch(toggleModal('newEmployeeForm'));
};

export const submitEditedEmployee = () => async (dispatch, getState) => {
  dispatch(validate());
  let errors = getState().form.errors;
  if ( !(_.every(errors, (err) => !err)) ) {
    return;
  }
  let updatedEmployee = getState().form.data;
  await axios.put(`${process.env.API}/employee/${updatedEmployee._id}`, updatedEmployee);
  await dispatch(getAllEmployees());
  dispatch(toggleModal('editEmployeeForm'));
};
