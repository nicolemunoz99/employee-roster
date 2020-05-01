import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { selectEmployee, toggleModal, submitEditedEmployee } from '../state/actions/';

const Employee = ({ employee }) => {
  const selectedEmployee = useSelector(state => state.employee.selected);
  const dispatch = useDispatch();

  const handleEmployeeClick = () => {
    dispatch(selectEmployee(employee));
  };

  const handleEditClick = () => {
    dispatch(toggleModal('editEmployeeForm'));
  };

  const handleClickActivate = (e) => {
    let employeeData = {...selectedEmployee};
    delete employeeData._id
    employeeData.Status = employee.Status === 'active' ? 'inactive' : 'active';
    let payload = {
      modalName: 'editEmployee',
      data: employeeData,
      id: selectedEmployee._id
    };
    dispatch(submitEditedEmployee(payload));
  }

  let active = employee.Status === 'active' ? true : false;

  return (
    <div className="col-12 no-gutters">
      <div className="col-md-8 mx-auto my-2">
        <div className="employee w-100">
          <div className="row justify-content-center my-2">
            <div className="col-8">
              <span className={`align-middle ${!active ? 'inactive' : null}`}>{`${employee.Last_name}, ${employee.First_name} ${employee.MI}${employee.MI ? '.' : ''}`} </span>
            </div>
            <div className="col-auto pointer" onClick={handleEmployeeClick}>
              <i className="material-icons align-middle">
                {employee._id === selectedEmployee._id ? 'expand_less' : 'expand_more'}
              </i>
            </div>
          </div>
        </div>
        {selectedEmployee._id === employee._id ?
          <div className="my-border details-wrapper p-1">

            <div className="row no-gutters">

              <div key={employee._id} className="col-sm-8 mr-auto ml-auto my-3 z-neg">

                {
                  Object.keys(employee).map((dataLabel, i) => {
                    let label = dataLabel.split('_').join(' ')
                    return (
                      <div key={i} className="container">
                        <div key={dataLabel} className={`row ${i % 2 === 0 ? 'details-l1' : 'details-l2'}`}>
                          <div className="col-5">{`${label}:`}</div>
                          <div className="col-7">{`${employee[dataLabel]}`}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className="col-sm-4 p-2">
                <div className="row control-wrapper">
                  
                  <div className="col-6 col-sm-12 m-auto my-sm-2">

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="edit">Edit Employee</Tooltip>
                      }
                    >
                      <div className="details-btn text-center center-hack" onClick={handleEditClick}>
                        <i className="material-icons h4 m-auto my-sm-3">edit</i> 
                      </div>
                    </OverlayTrigger>

                  </div>

                  <div className="col-6 col-sm-12 m-auto my-sm-2">
                    
                    <div className="details-btn text-center center-hack" onClick={handleClickActivate}>
                      <div className="h4 d-inline-block m-auto my-sm-3">{active ? 'deactivate' : 'activate'}</div> 
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          :
          null
        }
      </div>
      <div className="w-100"></div>
    </div>
  )
};

export default Employee;