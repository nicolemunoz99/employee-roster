import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import NewEmployee from './NewEmployee.jsx';

const ModalIndex = (props) => {
  const modal = useSelector(state => state.modal);

  useEffect(() => {
  }, [modal])

  return (
    <div>
      {modal.newEmployee ?
        <NewEmployee />
        :
        null
      }

    </div>
  )
};

export default ModalIndex;