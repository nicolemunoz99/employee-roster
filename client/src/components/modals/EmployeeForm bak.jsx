import React, {useEffect, useState} from 'react';
import xDate from 'xDate';
import ModalWrapper from './ModalWrapper.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { logErrors, resetForm, submitEdits } from '../../state/actions/';

const initialForm = {
  First_name: '',
  Last_name: '',
  MI: '',
  DOB: '',
  Hire_date: '',
  Status: ''
};


const EmployeeForm = () => {
  const [formData, updateForm] = useState(initialForm)
  const selectedEmployee = useSelector(state => state.selectedEmployee);
  const modal = useSelector(state => state.modal);
  const formErrors = useSelector(state => state.form.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal.editEmployee) {
      let formUpdate = {...selectedEmployee};
      delete formUpdate._id
      updateForm(formUpdate);
    }

    return () => {
      dispatch(resetForm());
    }
  }, []);


  const inputText = (e) => {
    if (e.target.id === 'MI' && e.target.value.length > 1) return;
    if ((e.target.id === "Last_name" && e.target.value.length > 20) || 
        (e.target.id === "First_name" && e.target.value.length > 20)) return;
    
    let tempState = { ...formData };
    
    if (e.target.type === "radio") {
      tempState[e.target.name] = e.target.value; // radio buttons
    } else {
      tempState[e.target.id] = e.target.value;
    }

    updateForm(tempState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = [];

    if (xDate(formData.DOB) > Date.now()) tempErrors.push('DOB');
    
    Object.keys(formData).forEach(field => {
      if (!formData[field] && field !== 'MI') { tempErrors.push(field); }
    });

    
    if (tempErrors.length === 0) {
      let payload;
      if (modal.newEmployee) {
        payload = {modalName: "newEmployee"}
      } else {
        payload = {modalName: "editEmployee", id: selectedEmployee._id}
      }
      payload.data = formData;
      dispatch(submitEdits(payload));
    } else {
      dispatch(logErrors(tempErrors));
    }
  }


  return (
    <ModalWrapper 
      name="newEmployeeForm"
      width={6} 
      title={modal.editEmployee ? 'Modify Employee' : 'New Employee'}
    >
      <form>
        <div className="pr-5">
        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">Name: </label></div>
          <div className="col-sm-8 pl-auto">
          <div className="pl-2">
            <div className="row">
              
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={formData.Last_name} type="text" className="form-control"
                  id="Last_name" placeholder="Last"></input>
              </div>
              <div className="col-sm-8 mb-2">
                <input onChange={inputText} value={formData.First_name} type="text" className="form-control"
                  id="First_name" placeholder="First"></input>
              </div>
              <div className="col-sm-4">
                <input onChange={inputText} value={formData.MI} type="text" className="form-control"
                  id="MI" placeholder="MI"></input>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">Hire date: </label></div>
          <div className="col-sm-8">
          <div className="pl-2">
            <div className="row">
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={formData.Hire_date} type="date" className="form-control"
                  id="Hire_date"></input>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">DOB: </label></div>
          
          <div className="col-sm-8">
          <div className="pl-2">
            <div className="row">
              <div className="col-sm-12 mb-2">
                <input onChange={inputText} value={formData.DOB} type="date" className="form-control"
                  id="DOB"></input>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="form-group row my-3 no-gutters">
          <div className="col-sm-4"><label className="col-form-label">Status: </label></div>
          <div className="col-sm-8">
            <div className="pl-2">
            <div className="row">
              <div className="col mt-auto">
              <div className="custom-control custom-radio custom-control-inline mr-5">
                <input onChange={inputText} type="radio" 
                  id="active" value="active" name="Status" className="custom-control-input"
                  checked={formData.Status === "active" ? true : false}
                >
                </input>
                <label className="custom-control-label" htmlFor="active">Active</label>
              </div>

              <div className="custom-control custom-radio custom-control-inline">
                <input onChange={inputText} type="radio"
                  id="inactive" value="inactive" name="Status" className="custom-control-input"
                  checked={formData.Status === "inactive" ? true : false}
                >
                </input>
                <label className="custom-control-label" htmlFor="inactive">Inactive</label>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row no-gutters">
        <div className="col-auto mx-auto my-3 text-danger">
          
          {formErrors.length > 0 ?
          <div>
            <div>Please fix errors in </div>
              <ul>
                { formErrors.map( error => <li>{error}</li> ) }
              </ul>
            </div>
            :
            null
          }
        </div>
        </div>
        <div className="px-3">
          <button onClick={handleSubmit} type="button" className="btn my-btn w-100">Submit</button>
        </div>
      </form>
    </ModalWrapper>
  )
};

export default EmployeeForm;