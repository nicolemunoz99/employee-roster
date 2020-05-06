import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout, toggleModal, setAuthState2 } from '../../state/actions/';
import CustomNavLink from './CustomNavLink.jsx';


import { Auth } from 'aws-amplify';

const NavNav = () => {
  const { isLoggedIn } = useSelector(state => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      dispatch(logout());
    }
    catch (err) {
      dispatch(toggleModal('dataError'));
    }
  };

  const handleSort = () => {

  }

  return (
    <>


        <Navbar sticky="top" collapseOnSelect expand="sm" >
          <Navbar.Brand>Company Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <CustomNavLink tag={Nav.Link} to="/">Home</CustomNavLink>
              
              {isLoggedIn && 
                <CustomNavLink tag={Nav.Link} to="/employees">Employees</CustomNavLink>
              }
              {location.pathname === '/employees' &&
                <NavDropdown title="Sort by" id="collasible-nav-dropdown">
                  <NavDropdown.Item eventKey="1" id="last" onClick={handleSort}>Last name</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2" id="first" onClick={handleSort}>First name</NavDropdown.Item>
                  
                  <NavDropdown.Item eventKey="3" id="status" onClick={handleSort}>Status</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4" id="hireDate" onClick={handleSort}>Hire date</NavDropdown.Item>
                </NavDropdown>
              }
            </Nav>

          
            <Nav>
              {isLoggedIn &&
                <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
              }

              {!isLoggedIn &&
              <>
                <CustomNavLink 
                  tag={Nav.Link} 
                  onClick={() => dispatch(setAuthState2('signIn'))} 
                  to="/login"
                >
                  Log in
                </CustomNavLink>

                <CustomNavLink 
                  tag={Nav.Link} 
                  onClick={() => dispatch(setAuthState2('signUp'))}
                  to="/signup"
                >
                  Create account
                </CustomNavLink>
              </>
              }
            </Nav>

          </Navbar.Collapse>
        

        
        </Navbar>


    </>
  );
};

export default NavNav;