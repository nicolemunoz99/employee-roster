import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Home from './Home.jsx';
import EmployeeList from './EmployeeList.jsx';
import ModalIndex from './modals/Index.jsx';


const App = () => {

  return (
    <div className="app">
      <Router>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/employees" component={EmployeeList} />
          <Route component={Home} />
        </Switch>
      
      </Router>
      
      <ModalIndex />
    
    </div>
  )
}

export default App;