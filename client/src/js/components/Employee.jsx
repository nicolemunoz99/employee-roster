import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee, toggleModal } from '../actions/';

const Employee = (props) => {
  const selectedEmployee = useSelector(state => state.selectedEmployee);
  const dispatch = useDispatch();

  const handleEmployeeClick = (e) => {
    if (selectedEmployee._id === props.employee._id) {
      dispatch(selectEmployee( {} ));
    } else {
      dispatch(selectEmployee(props.employee));
    }
  };

  const handleEditClick = (e) => {
    dispatch(toggleModal('editEmployee'));
  };
  
  return (
    <div className="col-12 no-gutters">
      <div className="col-md-8 mx-auto my-2">
        <div className="employee w-100">
          <div className="row justify-content-center my-2">
            <div className="col-8">
              <span className="align-middle">{`${props.employee.Last_name}, ${props.employee.First_name} ${props.employee.MI}${props.employee.MI ? '.' : ''}`} </span> 
            </div>
            <div className="col-auto pointer" onClick={handleEmployeeClick}>
              <i className="material-icons align-middle">
                {props.employee._id === selectedEmployee._id ? 'expand_less' : 'expand_more'}
              </i>
            </div>
          </div>
        </div>
        {selectedEmployee._id === props.employee._id ?
          <div className="my-border details-wrapper">
            <div onClick={handleEditClick} className="col-12 position-absolute text-right mt-1 pointer">
              <i className="material-icons ml-auto">edit</i>
            </div>
            <div key={props.employee._id} className="col-sm-8 mr-auto ml-auto my-3 z-neg">

              {
                Object.keys(props.employee).map((dataLabel, i) => {
                  let label = dataLabel.split('_').join(' ')
                  return (
                    <div className="container">
                    <div key={dataLabel} className={`row ${i%2 === 0 ? 'details-l1' : 'details-l2'}`}>
                      <div className="col-5">{`${label}:`}</div>
                      <div className="col-7">{`${props.employee[dataLabel]}`}</div>
                    </div>
                    </div>
                  )
                })
              }
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