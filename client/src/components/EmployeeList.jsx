import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Employee from './Employee.jsx';
import SortBy from './SortBy.jsx';
import { toggleModal, getAllEmployees } from '../state/actions/';

// Amplify authentication
import Amplify, { Auth } from "aws-amplify";
import config from "../../../aws-exports";
Amplify.configure(config);



const EmployeeList = () => {
  const employees = useSelector(state => state.employee.roster);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);


  return (
    <>

      <div className="container my-5">



        <div className="row py-4 justify-content-center no-gutters">
          <div className="col-md-8 col-lg-7  py-3 py-md-0 p-md-3 p-lg-4">
            <div className="row justify-content-between my-auto vert-center pb-5">
              
              <div className="col-7">
                <SortBy />
              </div>

              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="add">Add Employee</Tooltip>
                }
              >
                <div className="col-3 my-auto vert-center text-right" onClick={() => dispatch(toggleModal("newEmployeeForm"))}>
                  <i className="d-inline material-icons pointer h2">add_circle_outline</i>
                </div>
              </OverlayTrigger>

            </div>


            <div className="row no-gutters list-wrapper py-3">
              {employees.length > 0 ?

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
        </div>
      </div>

    </>
  );
};




export default withRouter(EmployeeList);