import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { logout, toggleModal } from '../state/actions/';
import { Redirect } from 'react-router-dom'

import { Auth } from 'aws-amplify';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = async() => {
    try {
      await Auth.signOut();
      history.push('/')
      dispatch(logout());
    }
    catch(err) {
     dispatch(toggleModal('dataError')); 
    }
  }

  return (
    <>
      navbar
      <Button bsPrefix="my-btn" onClick={handleSignout} type="button" className="btn my-btn">Logout</Button>
      { true && <Redirect to="/" />}
    </>
  );
};

export default NavBar;