import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import EmployeeForm from './EmployeeForm/EmployeeForm.jsx';
import SubmitResult from './SubmitResult.jsx';

const ModalIndex = () => {
  const modal = useSelector(state => state.modal);

  useEffect(() => {
  }, [modal])

  return (
    <>

      { modal.newEmployeeForm && <EmployeeForm /> }
      
      { modal.submitResult && <SubmitResult /> }

    </>
  )
};

export default ModalIndex;