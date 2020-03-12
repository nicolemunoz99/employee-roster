import React from 'react';
import { login } from '../../../urls.js'


const Home = (props) => {

  return (
    <div className="container-flex home-wrapper">
      <div className="row">
        <a className="col-12 text-center display-4 white-link"
           href={login}
        >
          Click to log in
        </a>
      </div>
    </div>
  )
}

export default Home;