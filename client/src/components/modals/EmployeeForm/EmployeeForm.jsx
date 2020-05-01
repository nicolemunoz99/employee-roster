import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FieldHeader, CustomFormGroup, FormFieldCol } from '../../ComponentBits.jsx';
import ModalWrapper from '../ModalWrapper.jsx';

import { updateForm, resetForm, submitEdits } from '../../../state/actions/';


const EmployeeForm = () => {
  const { data, errors: formErrors } = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      dispatch(resetForm());
    }
  }, []);

  const handleInput = (e) => {
    dispatch(updateForm({ [e.target.id]: e.target.value }))
  };

  const handleSubmit = () => {

  };


  return (
    <ModalWrapper
      name="newEmployeeForm"
      width={6}
      title="New Employee"
    >
      <Form className="pr-5" onSubmit={handleSubmit}>

        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Name" />

          <Col as={FormFieldCol}>
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
          <FieldHeader name="Hire date" />
          <Col as={FormFieldCol}>
            <Form.Control
              type="date"
              onChange={handleInput}
              id="Hire_date"
              value={data.Hire_date}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="DOB" />
          <Col as={FormFieldCol}>
            <Form.Control
              type="date"
              onChange={handleInput}
              id="DOB"
              value={data.DOB}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Status" />
          <Col as={FormFieldCol}>
            <Row className="align-items-center">
              <Col sm="4" className="align-items-center">
                <Form.Check
                  type="radio"
                  label="Active"
                  id="Status"
                  value="active"
                  checked={data.Status === 'active' ? true : false}
                  onChange={handleInput}
                  className="my-auto"
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

      <Row className="px-5" noGutters>
        <Col>
          <Button bsPrefix="my-btn" onClick={handleSubmit} type="button" className="btn my-btn w-100">Submit</Button>
        </Col>
      </Row>
      
    </ModalWrapper>
  )
};

export default EmployeeForm;