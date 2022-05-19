// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'

import React from 'react'

const JumbotronComponent = () => {
  return (
      <>
        <div class="container-fluid bg-light text-dark p-5">
          <div class="container bg-light p-5">
            <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
            <hr>
              <p>Go to My Website</p>
              <a href="#" class="btn btn-primary">link</a>
            </hr>
          </div>
        </div>
      </>
  )
}

export default JumbotronComponent;