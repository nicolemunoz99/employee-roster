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
        <div className="col-12 text-center mb-4 h2">Employee List</div>
          {
            employees.map(el => {
                delete el.__v;
                return (
                  <div className="col-12 no-gutters">
                    
                    <div className="col-md-8 ml-auto mr-auto my-accordion mt-3">
                      <button className="w-100 btn btn-primary" type="button" data-toggle="collapse" data-target={`#${el._id}`} aria-expanded="false" aria-controls="collapseExample">
                        <span className="h4">{`${el.Last_name}, ${el.First_name} ${el.MI}`}</span>
                      </button>
                    <div className="collapse border" id={el._id}>
                      <div key={el._id} className="col-sm-6 mr-auto ml-auto my-3">

                      {
                        Object.keys(el).map(dataLabel => {
                          let label = dataLabel.split('_').join(' ')
                          return (
                            <div>{`${label}: ${el[dataLabel]}`}</div> 
                          )
                        })
                      }
                      </div>
                    </div>
                                    
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