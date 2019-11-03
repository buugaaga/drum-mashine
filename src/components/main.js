import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import  { keysTrigger } from '../actions';


const Main = function(props) {
  console.log(props)
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} className='wrapper'>
        { keysTrigger.map( (val, i) => {
            let audioButton = new Audio(props.bankSound[i].url)
            return (
              <div className='button' key={i}>
                {val}
                
                {/* нужно правильно вставить аудио формат */}
              </div>
             
            )
          })
        }
        </Col>
        <Col md={6}>
          <h3>{}</h3>
        </Col>
      </Row>
    </Container>
  ) 
}        


export default Main;