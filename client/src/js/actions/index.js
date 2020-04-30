import { ADD_EMPLOYEES, SELECT_EMPLOYEE, TOGGLE_MODAL, LOG_ERRORS, RESET_FORM, UPDATE_EMPLOYEES } from '../constants/action-types.js';
import axios from 'axios';

export const addEmployees = (payload) => {
  return { type: ADD_EMPLOYEES, payload };
};

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload };
};

export const toggleModal = (payload) => {
  return { type: TOGGLE_MODAL, payload };
};

export const logErrors = (payload) => {
  return { type: LOG_ERRORS, payload };
};

export const resetForm = (payload) => {
  return { type: RESET_FORM, payload };
};

export const updateEmployees = (payload) => {
  return { type: UPDATE_EMPLOYEES, payload };
};

// thunks

export const getAllEmployees = () => async (dispatch) => {
  let employees = (await axios.get(`${process.env.API}/employee`)).data;
  dispatch(addEmployees(employees));
};

export const submitEdits = (payload) => async (dispatch) => {
  if (payload.modalName === 'newEmployee') {
    await axios.post(`${process.env.API}/employee`, payload.data);
  } else {
    await axios.put(`${process.env.API}/employee/${payload.id}`, payload.data);
  }
  let employees = (await axios.get(`${process.env.API}/employee`)).data;
  dispatch(updateEmployees(employees));
};