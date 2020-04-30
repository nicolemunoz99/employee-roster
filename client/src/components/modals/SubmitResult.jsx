import React, {useEffect, useState} from 'react';
import ModalWrapper from './ModalWrapper.jsx';
import { useDispatch, useSelector } from 'react-redux';

const SubmitResult = () => {
  let formSuccess = useDispatch(state => state.formSuccess);

  let modalData = {}
  
  if (formSuccess) {
    modalData.title = 'Success';
    modalData.contents = 'Submission successful';
  } else {
    modalData.title = 'Error';
    modalData.contents = 'There was a problem with your submission'
  }

  return (
    <ModalWrapper title={modalData.title}>
      <div className='w-100 text-center'>
        {modalData.contents}
      </div>
    </ModalWrapper>
  );
};

export default SubmitResult;