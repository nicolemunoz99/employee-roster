import React, { useEffect } from 'react';
import Employee from './Employee.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, toggleModal } from '../actions/';
import axios from 'axios';

let api = 'http://127.0.0.1:7200';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  useEffect (() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    let data = (await axios.get(`${api}/employee`)).data;
    console.log('data', data)
    dispatch(addEmployee(data));
  }


  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-auto mr-auto ml-auto text-center mb-4 h2">Employee List</div>
        <div className="col-auto h2" onClick={()=>dispatch(toggleModal("newEmployee"))}>
          <i className="material-icons pointer h2">add_circle_outline</i>
        </div>
          {
            employees.map(el => {
                return (
                  <Employee key={el._id} employee={el} />
                )              
            })
          }
      </div>
    </div>
  )
};

export default EmployeeList;