import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import NavNav from './nav/NavNav.jsx';
import { Login, ProtectedEmployeeList } from './Login.jsx';
import EmployeeList from './EmployeeList.jsx';
import ModalIndex from './modals/Index.jsx';


const App = () => {

  return (
    <div className="app">
      <Router>
        <NavNav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" key="login" component={Login} />
          <Route exact path="/signup" key="signup" component={Login} />
          <Route exact path="/test" component={EmployeeList} />
          <ProtectedEmployeeList exact path="/employees" render={EmployeeList} />
          <Route component={Home} />
        </Switch>
      
      </Router>
      
      <ModalIndex />
    </div>
  );
};




export default App;