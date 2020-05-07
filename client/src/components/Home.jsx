import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavLink from './nav/CustomNavLink.jsx';

const Home = () => {

  return (

    <Container>
      <h1 className="text-center mt-5">Employee Roster App</h1>

        <Col as={homeSection} title="Demo Options">
          Accessing the frontend /employees route requires authentication and employee API resources 
          are protected via Amazon Cognito. You can demo this app by one of the following:
          <ul className="mt-2">
            <li>
              <CustomNavLink to="/login" tag="span" className="text-link">
                Log in 
              </CustomNavLink>
               {' using an already-created account:'}
              <div className="ml-3 small">username: demo_this [ a t ] protonmail [ d o t ] com</div>
              <div className="ml-3 small">pw: demo123</div>
            </li>

            <li>
              <CustomNavLink to="/signup" tag="span" className="text-link">Create an account.</CustomNavLink>
               {' You will need to verify it through email.'}
            </li>
          </ul>
        </Col>

        <Col as={homeSection} title ="Highlights">
        Some features:
          <ul>
            <li>React UI</li>
            <li>Redux state management</li>
            <li>Responsive layout</li>
            <li>Client routing via React Router</li>
            <li>Authentication via Amazon Cognito, AWS Amplify</li>
            <li>Node.js RESTful API (protected with Cognito-Express)</li>
            <li>MongoDB</li>
          </ul>
        </Col>

        <Col as={homeSection} title="Code">
          <a href="https://github.com/nicolemunoz99/employee-roster" className="text-link" target="NONE">
            <img src="/img/github_logo4.png" /> /nicolemunoz99/employee-roster
          </a>
        </Col>

        <Col as={homeSection} title="Read Me">
            <a href="https://github.com/nicolemunoz99/employee-roster/blob/master/README.md" className="text-link my-auto" target="NONE">
              Readme.md 
            </a>
        </Col>


    </Container>

  );
};


const homeSection = ({ title, children }) => {
  return (
  <Row className="my-5">
    <Col md={{ span: 4}}>
      <h4> {title} </h4>
    </Col>
    <Col md={{ span: 8}} className="pl-sm-5 pl-md-0">
      {children}
    </Col>
  </Row>
  );
};



export default Home;