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
      <div className="row justify-content-md-center">
        <div className="col-12 text-center mb-4">Employee List</div>
          {
            employees.map(el => {
                delete el.__v;
                return (
                  <div className="col-12">
                    
                    <div>{`${el.Last_name}, ${el.First_name} ${el.MI}`}</div>
                    
                    <div key={el._id} className="col-md-6 mr-auto ml-auto mb-4">

                    {
                      Object.keys(el).map(dataLabel => {
                        let label = dataLabel.split('_').join(' ')
                        return (
                          <div>{`${label}: ${el[dataLabel]}`}</div> 
                        )
                      })
                    }
                    </div>
                    <div className="w-100"></div>
                  </div>
                )              
            })
          }
      </div>
    </div>
  )
};

export default EmployeeList;