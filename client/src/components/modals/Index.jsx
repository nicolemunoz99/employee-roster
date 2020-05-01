import React from 'react';
import { useSelector } from 'react-redux';
import { Waiting, DataError } from './DataStatus.jsx';
import { NewEmployeeForm, EditEmployeeForm } from './EmployeeForm/Index.jsx';
import SubmitResult from './SubmitResult.jsx';

const ModalIndex = () => {
  const modal = useSelector(state => state.modal);


  return (
    <>

      { modal.newEmployeeForm && <NewEmployeeForm /> }

      { modal.editEmployeeForm && <EditEmployeeForm /> }

      { modal.isWaitingForData && <Waiting /> }

      { modal.dataError && <DataError /> }
      
      { modal.submitResult && <SubmitResult /> }

    </>
  );
};

export default ModalIndex;