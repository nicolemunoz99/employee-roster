import { 
  SET_EMPLOYEES, 
  SELECT_EMPLOYEE, 
  TOGGLE_MODAL,
  TOGGLE_DATA_STATUS, 
  UPDATE_FORM, LOG_ERRORS, RESET_FORM, 
  UPDATE_EMPLOYEES 
} from './action-types.js';
import axios from 'axios';

export const setEmployees = (payload) => {
  return { type: SET_EMPLOYEES, payload };
};

export const selectEmployee = (payload) => {
  return { type: SELECT_EMPLOYEE, payload };
};

export const toggleModal = (modalName) => {
  return { type: TOGGLE_MODAL, modalName };
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

export const updateForm = (dataObj) => {
  return { type: UPDATE_FORM, dataObj }
}

// async/thunks

export const getAllEmployees = () => async (dispatch) => {
  let employees = (await axios.get(`${process.env.API}/employee`)).data;
  dispatch(setEmployees(employees));
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

export const closeForm = () => (dispatch) => {
  dispatch(resetForm);
  dispatch(toggleModal('employeeForm'));
}