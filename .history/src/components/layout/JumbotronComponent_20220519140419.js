import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import React from 'react'

const JumbotronComponent = () => {
  return (
      <>
        <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron !</h1>
                <p>
                This is a modified fluid jumbotron which
                stretches the whole horizontal space.    
                </p>
                <Button variant="primary">
                Primary Button
                </Button>
            </Container>
        </Jumbotron>
      </>
  )
}

export default JumbotronComponent;