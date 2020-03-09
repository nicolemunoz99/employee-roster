import { ADD_EMPLOYEE, SELECT_EMPLOYEE, TOGGLE_MODAL, UPDATE_EMPLOYEE, LOG_ERRORS, RESET_EMPLOYEE_DATA } from '../constants/action-types.js';

export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload }
}

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload }
}

export const toggleModal = (payload) => {
  return { type: TOGGLE_MODAL, payload }
}

export const updateEmployee = (payload) => {
  return { type: UPDATE_EMPLOYEE, payload }
}

export const logErrors = (payload) => {
  return { type: LOG_ERRORS, payload }
}

export const resetEmployeeData = (payload) => {
  return { type: RESET_EMPLOYEE_DATA, payload }
}