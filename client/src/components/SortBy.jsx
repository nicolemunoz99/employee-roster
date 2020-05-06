import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Col, Row } from 'react-bootstrap';
import { setSortOption, sortEmployees } from '../state/actions/';

const SortBy = () => {
  const selectedOption = useSelector(state => state.employee.sort.option);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortEmployees());
  }, [selectedOption])


  let options = {
    'First_name': {title: 'First name'},
    'Last_name': {title: 'Last name'},
    'Status': {title: 'Status'},
    'Hire_date': {title: 'Hire date'}
  };

  const handleSort = (e) => dispatch(setSortOption(e.target.id));

  return (
  <Row noGutters>
    <Col sm="12">
      Sort by:
    </Col>
    <Col sm="12">
      <Dropdown>
        <Dropdown.Toggle childBsPrefix='my-btn' id="sort-by" className="w-100 p-1" >
          {options[selectedOption].title}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          {Object.keys(options).map((name) => {
            if (selectedOption === name) return null
            return (
              <Dropdown.Item className="text-center" key={name} onClick={handleSort} id={name}>
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