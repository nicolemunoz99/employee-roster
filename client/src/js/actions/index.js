import { ADD_EMPLOYEE, SELECT_EMPLOYEE, CHANGE_MODAL, UPDATE_EMPLOYEE } from '../constants/action-types.js';

export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload }
}

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload }
}

export const changeModal = (payload) => {
  return { type: CHANGE_MODAL, payload }
}

export const updateEmployee = (payload) => {
  return { type: UPDATE_EMPLOYEE, payload }
}