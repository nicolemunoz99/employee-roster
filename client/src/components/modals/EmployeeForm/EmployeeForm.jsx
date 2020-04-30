import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FieldHeader, CustomFormGroup } from '../../ComponentBits.jsx';
import ModalWrapper from '../ModalWrapper.jsx';

import { updateForm, resetForm, submitEdits } from '../../../state/actions/';


const EmployeeForm = () => {
  const selectedEmployee = useSelector(state => state.selectedEmployee);
  const modal = useSelector(state => state.modal);
  const { data, errors: formErrors } = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      dispatch(resetForm());
    }
  }, []);

  const handleInput = (e) => {
    dispatch(updateForm({ [e.target.id]: e.target.value }))
  }


  return (
    <ModalWrapper
      name="newEmployeeForm"
      width={6}
      title="New Employee"
    >
      <Form className="pr-5">

        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Name" sm={4} />

          <Col sm={8} className="pl-auto">
            <Form.Control
              type="text"
              placeholder="Last"
              onChange={handleInput}
              id="Last_name"
              value={data.Last_name}
            />
            <Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="First"
                  onChange={handleInput}
                  id="First_name"
                  value={data.First_name}
                  className="mt-2"
                />
              </Col>

              <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="MI"
                  onChange={handleInput}
                  id="MI"
                  value={data.MI}
                  className="mt-2"
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Hire date" sm={4} />
          <Col sm={8}>
            <Form.Control
              type="date"
              onChange={handleInput}
              id="Hire_date"
              value={data.Hire_date}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="DOB" sm={4} />
          <Col sm={8}>
            <Form.Control
              type="date"
              onChange={handleInput}
              id="DOB"
              value={data.DOB}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Status" sm={4} />
          <Col sm={8}>
            <Row>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="Active"
                  id="Status"
                  value="active"
                  checked={data.Status === 'active' ? true : false}
                  onChange={handleInput}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="Inactive"
                  id="Status"
                  value="inactive"
                  checked={data.Status === 'inactive' ? true : false}
                  onChange={handleInput}
                />
              </Col>
            </Row>
          </Col>
        </Form.Group>

      </Form>
    </ModalWrapper>
  )
};

export default EmployeeForm;