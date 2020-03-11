import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import EmployeeForm from './EmployeeForm.jsx';
import SubmitResult from './SubmitResult.jsx';

const ModalIndex = () => {
  const modal = useSelector(state => state.modal);

  useEffect(() => {
  }, [modal])

  return (
    <div>
      {modal.newEmployee || modal.editEmployee ?
        <EmployeeForm />
        :
        null
      }
      {modal.submitResult ?
        <SubmitResult />
        :
        null
      }
    </div>
  )
};

export default ModalIndex;