import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { setRedirect, setAuthState2, setLoginErr } from '../state/actions/';

// Amplify auth components
import { Authenticator, SignIn, SignUp, ConfirmSignUp, ForgotPassword } from 'aws-amplify-react';
import { Hub } from 'aws-amplify';


// render EmployeeList if logged in; other wise redirect to Login route
export const ProtectedEmployeeList = ({ exact, path, render }) => {
  const { authState } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // if user not signed in, specify route to redirect to after successful login
    if (authState !== 'signedIn') dispatch(setRedirect(route));
  }, [authState]);

  let route = '/employees';

  let isLoggedIn = authState === 'signedIn';

  render = isLoggedIn ? render : () => <Redirect to="/login" />

  return (
    <Route
      exact={exact}
      path={path}
      render={render}
    />
  );
};



export const Login = ({ history }) => {
  const { redirectAfterLogin, authState, loginErr } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setRedirect(''));
      dispatch(setLoginErr(''));
    };
  }, []);

  useEffect(() => {
    // redirect upon successful login
    if (authState === 'signedIn') history.replace(redirectAfterLogin ? redirectAfterLogin : '/employees')
  }, [authState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loginErr]);

  // Amplify utility; listen for login errors
  Hub.listen('auth', res => {
    if (/failure/.test(res.payload.event)) dispatch(setLoginErr(res.payload.event));
  });

  const handleAuthStateChange = (state) => dispatch(setAuthState2(state));

  return (
    <>
      <Container>

        <Row className="justify-content-center my-4">
          <Col xs={10} >
            {(authState === 'signUp' || authState === 'signIn') &&
              <Row xs={1} className="py-3 justify-content-center">
                <Col xs="auto" className="small">
                  <div>Feel free to login using an existing account: </div>
                  <ul>
                    <li>demo_this [a t] protonmail [d o t] com</li>
                    <li>P/W: demo123</li>
                  </ul>
                </Col>
              </Row>
            }
          </Col>


          <Col xs={10} className="mt-3">

            {/* sign in/up errors */}
            {loginErr &&
              <Row xs={1} className="err err-wrapper py-3 justify-content-center">
                <Col xs="auto" className="small">{errMap[loginErr]}</Col>
              </Row>
            }

            {/* tell user to check emai */}
            {authState === 'confirmSignUp' &&
              <Row xs={1} className="info-wrapper p-3 text-center">
                <Col>Check your email for verification code and enter below.</Col>
              </Row>
            }

          </Col>
        </Row>

      </Container>


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
    </>
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


const errMap = {
  'signUp_failure': (
    <>
      <Col>Error Creating Account</Col>
      <ul>
        <li className="small">Username must be an email address.</li>
        <li className="small">Password must be at least 6 characters.</li>
      </ul>
    </>
  ),
  'signIn_failure': (
    <>
      <Col>Sign In Error</Col>
      <ul>
        <li className="small">Incorrect email or password.</li>
        <li className="small">Email is case sensitive.</li>
      </ul>
    </>
  )
};