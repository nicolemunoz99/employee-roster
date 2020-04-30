import React from 'react';
import { Form, Row } from 'react-bootstrap';

export const ModalTitle = ({ title }) => {
  return (
    <div className="row no-gutters justify-content-end">
      <div className="col-10 h3 mb-5 text-left modal-title pl-3">
        {title}
      </div>
    </div>
  );
};

export const FieldHeader = ({ name, sm=12 }) => {
  return (
    <div className={`col-sm-${sm}`}>
      <label className="col-form-label">{`${name}: `}</label>
    </div>
  );
};

export const CustomFormGroup = ({ children, className, bootstrapProps}) => {
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