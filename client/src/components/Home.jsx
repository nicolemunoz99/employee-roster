import React, { useState } from 'react';
import EmployeeList from './EmployeeList.jsx';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


const Home = () => {
  const [showRedirect, updateShowRedirect] = useState(false);
  
  const handleLoginClick = (e) => {
    updateShowRedirect(true);
  };

  return (
    <Router>
      <div className="container-flex home-wrapper">
        <div className="row justify-content-md-center">
          <div className="col-12 text-center display-4">
            {showRedirect ?
              <Redirect to="/employees" />
              :
              <span className="white-link pointer" onClick={handleLoginClick}>
              Log in
              </span>
            }
            


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