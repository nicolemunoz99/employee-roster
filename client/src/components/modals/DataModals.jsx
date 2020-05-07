import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import ModalWrapper from './ModalWrapper.jsx';
import { toggleModal, confirmToggleStatus } from '../../state/actions/'

export const DataStatus = ({ body, ...otherProps }) => {
  return (
    <ModalWrapper
      { ...otherProps }
    >
      <div className="text-center px-3"> { body } </div>
    </ModalWrapper>
  )
}


export const Confirm = ({ submitAction }) => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper
      title="Confirm"
      name="confirm"
    >
      <Row className="justify-content-center">
        <Col xs='auto'>
          Update employee's status?
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs='auto'>
          <Button bsPrefix="my-btn" onClick={() => dispatch(toggleModal('confirm'))} type="button" className="btn my-btn m-2">Cancel</Button>
          <Button bsPrefix="my-btn" onClick={() => dispatch(confirmToggleStatus())} type="button" className="btn my-btn m-2">Confirm</Button>
        </Col>
      </Row>
    </ModalWrapper>
  );
};