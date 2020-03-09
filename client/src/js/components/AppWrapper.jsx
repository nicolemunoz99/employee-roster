import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Home.jsx';
import EmployeeList from './EmployeeList.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ModalIndex from './modals/ModalIndex.jsx';

const AppWrapper = (props) => {

  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/employees" component={EmployeeList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>

      <ModalIndex />
    </div>
  )
}

export default AppWrapper;