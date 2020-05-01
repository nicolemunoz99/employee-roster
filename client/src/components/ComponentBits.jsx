import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export const ModalTitle = ({ title }) => {
  return (
    <div className="row no-gutters justify-content-end">
      <div className="col-10 h3 mb-5 text-left modal-title pl-3">
        {title}
      </div>
    </div>
  );
};


// ... form ...

export const FieldHeader = ({ name }) => {
  return (
    <Col sm={5} className="my-2">
      <label className="col-form-label">
        {`${name}: `}
      </label>
    </Col>
  );
};

export const FormFieldCol = ({ children }) => {
  return(
    <Col 
      sm={7}
      className="pl-5 pl-sm-0 my-auto"
    >
      { children }
    </Col>
  )
}

export const CustomFormGroup = ({ children, bootstrapProps }) => {
  return(
    <Form.Group 
      as={Row} 
      className="my-5" 
      {...bootstrapProps}
    >
      { children }
    </Form.Group>
  )
}