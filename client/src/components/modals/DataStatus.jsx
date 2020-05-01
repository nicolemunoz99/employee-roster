import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ModalWrapper from './ModalWrapper.jsx';

export const Waiting = () => {

  return(
    <ModalWrapper
      title="Please Wait"
      cancelClose={true}
    >
      <div className="text-center display-4">Waiting...</div>
    </ModalWrapper>
  );
};

export const DataError = () => {
  return(
    <ModalWrapper
      title="Error"
      name="dataError"
    >
    <div className="text-center">Oops. Something went wrong.</div>
    </ModalWrapper>
  );

}