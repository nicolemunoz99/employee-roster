import React from 'react';
import { useSelector } from 'react-redux';
import {DataStatus, Confirm } from './DataModals.jsx';
import { NewEmployeeForm, EditEmployeeForm } from './EmployeeForm/Index.jsx';

const ModalIndex = () => {
  const modal = useSelector(state => state.modal);


  return (
    <>

      { modal.newEmployeeForm && <NewEmployeeForm /> }

      { modal.editEmployeeForm && <EditEmployeeForm /> }

      { modal.confirm && <Confirm /> }

      { modal.isWaitingForData && 
        <DataStatus
          title="Please wait"
          body="Patience."
          name="isWaitingForData"
          cancelClose={true}
         /> 
      }

      { modal.dataError && 
      <DataStatus
        title="Error"
        body="Oops. Something went wrong."
        name="dataError"
       /> 
      }
      
      { modal.success && 
      <DataStatus 
        title="Success"
        body="Success."
        name="success"
      /> 
      }

    </>
  );
};

export default ModalIndex;