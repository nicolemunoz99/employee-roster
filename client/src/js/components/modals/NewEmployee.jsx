import React from 'react';
import ModalWrapper from './ModalWrapper.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../../actions/';

const formFields = ['First_name', 'MI', 'Last_name', 'DOB', 'Hire_date', 'Status'];

const NewEmployee = () => {
  const newEmp = useSelector(state => state.employeeData);
  const dispatch = useDispatch();


  const inputText = (e) => {
    if (e.target.id === 'MI' && e.target.value.length > 1) return;
    let tempState = { ...newEmp }
    tempState[e.target.id] = e.target.value
    dispatch(updateEmployee(tempState))
  }



  return (
    <ModalWrapper width={6} title="Enter New Employee" modalName="newEmployee">
      <form>
        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">Name: </label></div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={newEmp.Last_name} type="text" className="form-control"
                  id="Last_name" placeholder="Last"></input>
              </div>
              <div className="col-sm-8 mb-2">
                <input onChange={inputText} value={newEmp.First_name} type="text" className="form-control"
                  id="First_name" placeholder="First"></input>
              </div>
              <div className="col-sm-4">
                <input onChange={inputText} value={newEmp.MI} type="text" className="form-control"
                  id="MI" placeholder="MI"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">Hire date: </label></div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={newEmp.Hire_date} type="date" className="form-control"
                  id="Hire_date"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">DOB: </label></div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={newEmp.DOB} type="date" className="form-control"
                  id="DOB"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row my-3 no-gutters">
          <label className="col-sm-4 col-form-label">Status: </label>
          <div className="col-sm-8">
          
            <div className="custom-control custom-radio custom-control-inline mr-5">
              <input onClick={inputText} type="radio"
                id="active" value="true" name="status" className="custom-control-input">
              </input>
              <label className="custom-control-label" htmlFor="active">Active</label>
            </div>

            <div className="custom-control custom-radio custom-control-inline">
              <input onClick={inputText} type="radio"
                id="inactive" value="false" name="status" className="custom-control-input">
              </input>
              <label className="custom-control-label" htmlFor="inactive">Inactive</label>
            </div>

          </div>
        </div>
        <button type="button" className="btn btn-light w-100">Submit</button>
      </form>
    </ModalWrapper>
  )
};

export default NewEmployee;