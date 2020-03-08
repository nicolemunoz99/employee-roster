import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './js/store/';

import App from './js/components/App.jsx';
import EmployeeList from './js/components/EmployeeList.jsx';
import Login from './js/components/Login.jsx';
import Signup from './js/components/Signup.jsx';


render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/employees" component={EmployeeList} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  </Provider>,
  document.getElementById('app')
);