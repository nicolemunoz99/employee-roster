import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Button, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';
import { setSortOption, toggleOrder, sortEmployees } from '../state/actions/';

const SortBy = () => {
  const {option: selectedOption, ascending} = useSelector(state => state.employee.sort);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortEmployees());
  }, [selectedOption, ascending])


  let options = {
    'First_name': {title: 'First name'},
    'Last_name': {title: 'Last name'},
    'Status': {title: 'Status'},
    'Hire_date': {title: 'Hire date'}
  };

  const handleSort = (e) => dispatch(setSortOption(e.target.id));

  const handleToggleOrder = () => dispatch(toggleOrder())

  return (
  <Row noGutters>
    <Col sm="12">
      Sort by:
    </Col>
    <Col xs="9">
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

    <Col xs="3" sm="2">
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="sort-order">
            {`Sort ${ascending ? 'descending' : 'ascending'}`}
          </Tooltip>
        }
      >

        <Button bsPrefix="my-btn" className="w-100 p-1" onClick={handleToggleOrder}>
          <span className="d-block material-icons my-auto">
            {`trending_${ascending ? 'down' : 'up'}`}
          </span>
        </Button>
      </OverlayTrigger>

    </Col>
  </Row>
  );

};

export default SortBy;
