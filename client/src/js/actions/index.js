import { ADD_EMPLOYEES, SELECT_EMPLOYEE, TOGGLE_MODAL, LOG_ERRORS, RESET_FORM } from '../constants/action-types.js';
import api from '../../../api.js';
import axios from 'axios';

export const addEmployees = (payload) => {
  return { type: ADD_EMPLOYEES, payload }
}

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload }
}

export const toggleModal = (payload) => {
  return { type: TOGGLE_MODAL, payload }
}

export const logErrors = (payload) => {
  return { type: LOG_ERRORS, payload }
}

export const resetForm = (payload) => {
  return { type: RESET_FORM, payload }
}

export const getAllEmployees = () => async dispatch => {
  let employees = (await axios.get(`${api}/employee`)).data;
  dispatch(addEmployees(employees));
}