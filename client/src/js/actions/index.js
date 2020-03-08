import { ADD_EMPLOYEE } from '../constants/action-types.js';

export function addEmployee(payload) {
  return { type: ADD_EMPLOYEE, payload}
}