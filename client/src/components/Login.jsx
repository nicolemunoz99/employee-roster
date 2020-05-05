import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { login } from '../state/actions/';

// Amplify auth components
import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';

 // render component (e.g., EmployeeList) if logged in; other wise redirect to Login route
export const ProtectedEmployeeList = (props) => {
  const { isLoggedIn } = useSelector(state => state);

  const render = isLoggedIn ? props.component : LoginRedirect

  return (
    <Route 
      exact={props.exact}
      path={props.path}
      component={render}
    />
  );
};


const LoginRedirect = (props) => {
  return (
    <Redirect to={`/login?redirect=${props.location.pathname}`} />
  );
};


export const Login = (props) => {
  const { isLoggedIn } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleAuthStateChange = (state) => {
    if (state === 'signedIn') {
      dispatch(login());
    }
  };

  // get route to redirect to from query
  let redirectRoute = props.location.search.split('?redirect=')[1];

  return (
  <>
    <Authenticator 
      hideDefault={true} 
      onStateChange={handleAuthStateChange}
      authState='signUp'
      header='Sign up with Email'
      usernameAttributes="Email"
    >
        <SignIn />
        <SignUp
          signUpConfig={signUpConfig}
        />
        <ConfirmSignUp />

    </Authenticator>

    { isLoggedIn && <Redirect to={redirectRoute ? redirectRoute : '/employees'} />}
</>
  );
};

// config Amplify UI
const signUpConfig = {
  header: 'Sign Up With Email',
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
