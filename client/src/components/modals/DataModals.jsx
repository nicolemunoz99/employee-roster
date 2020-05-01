import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import ModalWrapper from './ModalWrapper.jsx';

export const DataStatus = ({ body, ...otherProps }) => {
  return (
    <ModalWrapper
      { ...otherProps }
    >
      <div className="text-center px-3"> { body } </div>
    </ModalWrapper>
  )
}


export const Confirm = () => {
  return (
    <ModalWrapper
      title="Confirm"
      name="confirmToggleStatus"
    >
      <Row className="justify-content-center">
        <Col xs='auto'>
          Update employee's status?
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs='auto'>
          <Button bsPrefix="my-btn" onClick={() => {}} type="button" className="btn my-btn m-2">Cancel</Button>
          <Button bsPrefix="my-btn" onClick={() => {}} type="button" className="btn my-btn m-2">Confirm</Button>
        </Col>
      </Row>
    </ModalWrapper>
  );
};