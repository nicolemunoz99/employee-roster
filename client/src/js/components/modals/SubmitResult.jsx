import React, {useEffect, useState} from 'react';
import ModalWrapper from './ModalWrapper.jsx';
import { useDispatch, useSelector } from 'react-redux';

const SubmitResult = () => {
  let result = useDispatch(state => state.formResult);

  return (
    <ModalWrapper>
      hi
    </ModalWrapper>
  );
};

export default SubmitResult;