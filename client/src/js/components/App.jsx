import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import EmployeeList from './EmployeeList.jsx';
import ModalIndex from './modals/ModalIndex.jsx';

// import Amplify from 'aws-amplify';
// import aws_exports from '../../../../aws-exports.js';
// import { withAuthenticator } from 'aws-amplify-react';
// Amplify.configure(aws_exports);

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