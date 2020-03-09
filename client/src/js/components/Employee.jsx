import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployee, changeModal } from '../actions/';

const Employee = (props) => {
  const selectedEmployee = useSelector(state => state.selectedEmployee);
  const dispatch = useDispatch();

  const handleEmployeeClick = (e) => {
    if (selectedEmployee._id === props.employee._id) {
      dispatch(selectEmployee( {} ));
      
    } else {
      dispatch(selectEmployee(props.employee));
    }
  }

  const handleEditClick = (e) => {
    dispatch(changeModal('editEmployee'));
  }
  
  return (
    <div className="col-12 no-gutters">
      <div className="col-md-8 ml-auto mr-auto mt-3">
        <button className="w-100 btn btn-secondary" onClick={handleEmployeeClick}>
          <span className="h4">{`${props.employee.Last_name}, ${props.employee.First_name} ${props.employee.MI}`}</span>
        </button>
        {selectedEmployee._id === props.employee._id ?
          <div className="border">
            <div onClick={handleEditClick} className="col-12 position-absolute text-right mt-1 pointer">
              <i className="material-icons ml-auto">edit</i>
            </div>
            <div key={props.employee._id} className="col-sm-8 mr-auto ml-auto my-3 z-neg">

              {
                Object.keys(props.employee).map((dataLabel, i) => {
                  let label = dataLabel.split('_').join(' ')
                  return (
                    <div className="container">
                    <div key={dataLabel} className={`row ${i%2 === 0 ? 'bg-light' : null}`}>
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