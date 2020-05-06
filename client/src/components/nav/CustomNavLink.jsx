import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CustomNavLink = ({ history, to, onClick, tag: Tag, staticContext, className='', ...rest }) => {


  let active = history.location.pathname === to ? true : false;

  return (

  <Tag
      {...rest}
      onClick={(event) => {
        onClick(event);
        history.push(to)
      }}
      active={active}
      className={`pointer ${className}`}
      eventKey={to}
  />
)};


CustomNavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
      push: PropTypes.func.isRequired
  }).isRequired,
  onClick: PropTypes.func
};

CustomNavLink.defaultProps = {
  onClick: () => {},
  tag: 'div',
  to: '/'
};


export default withRouter(CustomNavLink);