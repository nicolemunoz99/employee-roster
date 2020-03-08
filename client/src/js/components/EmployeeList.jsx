import React, { useEffect } from 'react';
// import Employee from './Employee.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../actions/';
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
      <div className="row">
      <div className="col">EmployeeList</div>
      {
        employees.map(el => {
          delete el._id;
          delete el.__v;
          return (
            <div key={el._id}>
              {
                Object.keys(el).map(dataName => {
                  return (
                    <div>{`${dataName}: ${el[dataName]}`}</div>
                  )
                })
              }
            </div>
          )
        })
      }
      </div>
    </div>
  )
};

export default EmployeeList;