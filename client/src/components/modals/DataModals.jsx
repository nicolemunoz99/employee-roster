import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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


export const Confirm = ({ }) => {
  const dispatch = useDispatch();
  const emp = useSelector(state => state.employee.selected);

  const newStatus = emp.Status === 'active' ? 'inactive' : 'active'

  return (
    <ModalWrapper
      title="Confirm"
      name="confirm"
    >
      <Row className="justify-content-center">
        <Col xs='auto' className="text-center">
          <div>{`${emp.Last_name}, ${emp.First_name} ${emp.MI}`}</div>
          <div>{`ID: ${emp._id}`}</div>
          <div className="my-4">Update status to {newStatus}?</div>
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