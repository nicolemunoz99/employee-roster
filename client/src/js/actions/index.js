import { ADD_EMPLOYEE } from '../constants/action-types.js';

export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload}
}

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload}
}