import React from 'react';
import { login } from '../../../urls.js';
import EmployeeList from './EmployeeList.jsx';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const Home = () => {

  return (
    <Router>
      <div className="container-flex home-wrapper">
        <div className="row justify-content-md-center">
          <div className="col-12 text-center display-4">
            <Link to="/employees">
              <span className="white-link">
                Log in
            </span>

            </Link>
          </div>

          <Switch>
            <Route exact path="/employees">
              <EmployeeList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Home;