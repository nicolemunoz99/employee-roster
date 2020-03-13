import React, { useEffect } from 'react';
import Employee from './Employee.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, getAllEmployees } from '../actions/';

// import Amplify from "aws-amplify";
// import { withAuthenticator } from "aws-amplify-react";
// import config from "../../../../aws-exports";
// Amplify.configure(config);


const EmployeeList = (props) => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getAllEmployees());
  }, []);

  console.log('props in List: ', props)

  return (
    <div>

    <div className="container my-5">
      <div className="row justify-content-md-center">
        <div className="col-auto mr-auto ml-auto text-center mb-4 h2">
          Employees
        </div>
        <div className="col-auto h2 mx-auto" onClick={()=>dispatch(toggleModal("newEmployee"))}>
          <i className="material-icons pointer h2">add_circle_outline</i>
        </div>
      </div>
        <div className="row list-wrapper py-4 mx-1">
          {
            employees.map(el => {
                return (
                  <Employee key={el._id} employee={el} />
                )              
            })
          }
        </div>
    </div>

    </div>
  )
};

// export default withAuthenticator(EmployeeList, true);
export default EmployeeList;