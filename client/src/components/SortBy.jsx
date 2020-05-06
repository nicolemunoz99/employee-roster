import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Col, Row } from 'react-bootstrap';
import { sortEmployees } from '../state/actions/';

const SortBy = () => {
  const selectedOption = useSelector(state => state.employee.sort.option);

  useEffect(() => {

  }, [selectedOption])


  // let options = {
  //   'First name': {fieldName: 'First_name'},
  //   'Last name': {fieldName: 'Last_name'},
  //   'Status': {fieldName: 'Status'},
  //   'Hire date': {fieldName: 'Hire_date'}
  // };

  let options = {
    'First_name': {title: 'First name'},
    'Last_name': {title: 'Last name'},
    'Status': {title: 'Status'},
    'Hire_date': {title: 'Hire date'}
  };

  const handleSort = (e) => {
    console.log('e.target', e.target.attributes)
  };

  return (
  <Row>
    <Col sm="auto">
      Sort by:
    </Col>
    <Col sm="auto">
    <Dropdown>
      <Dropdown.Toggle childBsPrefix='my-btn' id="sort-by" className="p-2 px-3 px-sm-5">
        {options[selectedOption].title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.keys(options).map((name) => {
          return (
            <Dropdown.Item key={name} onClick={handleSort} id={name}>
              {options[name].title}
            </Dropdown.Item>
          )
        })

        }
      </Dropdown.Menu>

    </Dropdown>
    </Col>
  </Row>
  );

};

export default SortBy;

// {location.pathname === '/employees' &&
// <NavDropdown title="Sort by" id="collasible-nav-dropdown">
//   <NavDropdown.Item eventKey="1" id="last" onClick={handleSort}>Last name</NavDropdown.Item>
//   <NavDropdown.Item eventKey="2" id="first" onClick={handleSort}>First name</NavDropdown.Item>
  
//   <NavDropdown.Item eventKey="3" id="status" onClick={handleSort}>Status</NavDropdown.Item>
//   <NavDropdown.Item eventKey="4" id="hireDate" onClick={handleSort}>Hire date</NavDropdown.Item>
// </NavDropdown>
// }

const sortOptions = {
  first: {
    fieldName: 'First_name'
  },
  last: {
    fieldName: 'Last_name'
  },
  status: {
    fieldName: 'Status'
  },
  hireDate: {
    fieldName: 'Hire_date'
  }
}