import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Employee from './Employee.jsx'
import { toggleModal, getAllEmployees } from '../state/actions/';

// Amplify authentication
import Amplify, { Auth } from "aws-amplify";
import config from "../../../aws-exports";
Amplify.configure(config);



const EmployeeList = () => {
  const employees = useSelector(state => state.employee.roster);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getAllEmployees());
  }, []);




  return (
    <>

    <div className="container my-5">
      <div className="row justify-content-md-center">
        <div className="col-auto mr-auto ml-auto text-center mb-4 h2">
          Employees
        </div>

      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="add">Add Employee</Tooltip>
        }
      >
        <div className="col-auto h2 mx-auto" onClick={()=>dispatch(toggleModal("newEmployeeForm"))}>
          <i className="material-icons pointer h2">add_circle_outline</i>
        </div>
      </OverlayTrigger>

      </div>

      <div className="row list-wrapper py-4 mx-1">
        
        { employees.length > 0 ?

          employees.map(el => {
              return (
                <Employee key={el._id} employee={el} />
              )              
          })

          :
          <div className="mx-auto">No employees</div>
        }

      </div>
    </div>

    </>
  )
};



const signUpConfig = {
  header: 'Sign Up With Email',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
};


export default EmployeeList;