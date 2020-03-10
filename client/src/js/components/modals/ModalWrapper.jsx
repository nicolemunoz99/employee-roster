import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, resetForm } from '../../actions/';

const ModalWrapper = (props) => {
  const dispatch = useDispatch();
  
  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal(props.activeModal));
      dispatch(resetForm());
    }
  };

  return (

    <div onClick={closeHandler} className="d-flex justify-content-center my-modal-backdrop no-gutters">
      <div className={`col-11 col-md-6 my-modal border rounded`}>
        <div className="col-12 position-absolute mt-3 pointer text-right">
          <i onClick={closeHandler} className="material-icons">close</i>
        </div>
        <div className="col-10 mx-auto mt-4 my-5">
          <div className="h3 mb-5">{props.title}</div>
          {props.children}
        </div>
      </div>
    </div>

  )

};

export default ModalWrapper;