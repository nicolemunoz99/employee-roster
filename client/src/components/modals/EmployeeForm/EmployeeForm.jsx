import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FieldHeader, CustomControl, CustomFormGroup, FormFieldCol, CustomRadioGroup } from '../../ComponentBits.jsx';
import ModalWrapper from '../ModalWrapper.jsx';

import { updateField, resetForm, validateField, validateForm } from '../../../state/actions/';


const EmployeeForm = ({ title, modalName, submitAction }) => {
  const { data } = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetForm());
    }
  }, []);

  const handleInput = (e) => dispatch(updateField({ fieldName: e.target.id, value: e.target.value }));

  const handleBlur = (e) => dispatch(validateField( [e.target.id] ));

  const handleSubmit = () => {
    dispatch(validateForm());
    submitAction();
  }


  return (
    <ModalWrapper
      name={modalName}
      width={6}
      title={title}
    >
      <Form className="pr-5">

        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Name" />

          <Col as={FormFieldCol}>
            <Form.Control
              as={CustomControl}
              type="text"
              placeholder="Last"
              onChange={handleInput}
              onBlur={handleBlur}
              id="Last_name"
              value={data.Last_name}
            />
            
            <Row>
              <Col sm={8}>
                <Form.Control
                  as={CustomControl}
                  type="text"
                  placeholder="First"
                  onChange={handleInput}
                  onBlur={handleBlur}
                  id="First_name"
                  value={data.First_name}
                  className="mt-2"
                />
              </Col>

              <Col sm={4}>
                <Form.Control
                  as={CustomControl}
                  type="text"
                  placeholder="MI"
                  onChange={handleInput}
                  onBlur={handleBlur}
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
              as={CustomControl}
              type="date"
              onChange={handleInput}
              onBlur={handleBlur}
              id="Hire_date"
              value={data.Hire_date}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="DOB" />
          <Col as={FormFieldCol}>
            <Form.Control
              as={CustomControl}
              type="date"
              onChange={handleInput}
              onBlur={handleBlur}
              id="DOB"
              value={data.DOB}
            />
          </Col>
        </Form.Group>


        <Form.Group as={CustomFormGroup}>
          <FieldHeader name="Status" />
          <Col as={FormFieldCol}>
            <CustomRadioGroup id="Status">
            <Row className="align-items-center">
              <Col sm="4" className="align-items-center">
                <Form.Check
                  type="radio"
                  label="Active"
                  id="Status"
                  value="active"
                  checked={data.Status === 'active' ? true : false}
                  onChange={handleInput}
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                />
              </Col>
            </Row>
            </CustomRadioGroup>
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