import React from 'react';
import { useDispatch } from 'react-redux';
import EmployeeForm from './EmployeeForm.jsx';
import { submitNewEmployee, submitEditedEmployee } from '../../../state/actions/';

export const NewEmployeeForm = () => {
  const dispatch = useDispatch();


  return (
    <EmployeeForm 
      title="New Employee" 
      handleSubmit={dispatch(submitNewEmployee())}
    />
  );
};


export const EditEmployeeForm = () => {
  const dispatch = useDispatch();


  return (
    <EmployeeForm
      title="Edit"
      handleSubmit={dispatch(submitEditedEmployee())}
    />
  );
};

