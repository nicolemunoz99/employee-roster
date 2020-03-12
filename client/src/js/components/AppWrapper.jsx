import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import EmployeeList from './EmployeeList.jsx';
import ModalIndex from './modals/ModalIndex.jsx';

const AppWrapper = (props) => {

  return (
    <div className="app">
      <Router>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/employees" component={EmployeeList} />
        </Switch>
      </Router>

      <ModalIndex />
    </div>
  )
}

export default AppWrapper;