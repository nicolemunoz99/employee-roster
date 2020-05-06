import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { login, setRedirect, setAuthState2 } from '../state/actions/';

// Amplify auth components
import { Authenticator, SignIn, SignUp, ConfirmSignUp, ForgotPassword } from 'aws-amplify-react';



 // render EmployeeList if logged in; other wise redirect to Login route
export const ProtectedEmployeeList = ({ exact, path, render }) => {
  const { isLoggedIn } = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(() => {
    // define route to redirect to after successful login
    if (!isLoggedIn) dispatch(setRedirect(route));
  }, []);

  let route = '/employees'

  render = isLoggedIn ? render : () => <Redirect to="/login" />

  return (
    <Route 
      exact={exact}
      path={path}
      render={render}
    />
  );
};



export const Login = ({ location, history }) => {
  const { isLoggedIn, redirectAfterLogin, authState } = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch(setRedirect(''));
      dispatch(setAuthState2(''));
    };
  }, []);

  // redirect after successful login
  useEffect(() => {
    if (isLoggedIn) history.replace(redirectAfterLogin ? redirectAfterLogin : '/employees')
  }, [isLoggedIn]);


  const handleAuthStateChange = (state) => {
    if (state === 'signedIn') dispatch(login());
  };


  return (

    <Authenticator 
      hideDefault={true} 
      onStateChange={handleAuthStateChange}
      authState={authState}
      usernameAttributes="Email"
    >
        <SignIn />
        <SignUp
          signUpConfig={signUpConfig}
        />
        <ConfirmSignUp />
        <ForgotPassword />

    </Authenticator>

  );
};

// Amplify UI config
const signUpConfig = {
  header: 'Create Account',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
};
