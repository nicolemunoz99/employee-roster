import React from 'react';
import { useHistory } from 'react-router-dom'


const Home = () => {
  const history = useHistory();
  
  const handleLoginClick = () => {
    history.push('/login')
  };

  return (

      <div className="container-flex home-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 text-center display-4">

              <span className="white-link pointer" onClick={handleLoginClick}>
                Log in
              </span>

          </div>
        </div>
      </div>

  )
}

export default Home;