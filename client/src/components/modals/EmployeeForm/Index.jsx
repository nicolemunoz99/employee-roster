import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeForm from './EmployeeForm.jsx';
import { submitNewEmployee, submitEditedEmployee, updateForm } from '../../../state/actions/';

export const NewEmployeeForm = () => {
  const dispatch = useDispatch();

  return (
    <EmployeeForm 
      title="New Employee" 
      handleSubmit={ () => dispatch(submitNewEmployee()) }
      modalName="newEmployeeForm"
    />
  );
};


export const EditEmployeeForm = () => {
  const employee = useSelector(state => state.employee.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    // load data into form on load
    dispatch(updateForm(employee));
  }, []);


  return (
    <EmployeeForm
      title="Edit Employee"
      handleSubmit={ () => dispatch(submitEditedEmployee()) }
      modalName="editEmployeeForm"
    />
  );
};

