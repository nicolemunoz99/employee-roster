import React from 'react';
import { useDispatch } from 'react-redux';
import { resetForm } from '../../state/actions/actions.js';

const ModalWrapper = (props) => {
  const dispatch = useDispatch();
  
  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(resetForm());
    }
  };

  return (

    <div onClick={closeHandler} className="d-flex justify-content-center my-modal-backdrop no-gutters">
      <div className="col-11 col-md-6 my-modal">
        <div className="col-12 position-absolute mt-3 pointer text-right">
          <i onClick={closeHandler} className="material-icons">close</i>
        </div>
        <div className="row no-gutters">
        <div className="col-12 mt-4 my-5">
          <div className="row no-gutters justify-content-end">
            <div className="col-10 h3 mb-5 text-left modal-title pl-3">
              {props.title}
            </div>
          </div>
          {props.children}
        </div>
        </div>
      </div>
    </div>

  )

};

export default ModalWrapper;