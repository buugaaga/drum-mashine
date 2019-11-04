import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import  { keysTrigger } from '../actions';

import Display from './display';
import Trigger from './trigger';


const Main = function(props) {
  console.log(props)
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} className='wrapper'>
        { keysTrigger.map( (val, i) => (
              <div className='button' key={i} data-url={props.bankSound[i].url} data-name={props.bankSound[i].id} onClick={e => props.handleClick(e)}>
                {val}
              </div>
            )
          )
        }
        </Col>
        <Col  md={6}>
          <Trigger />
          <Display />
        </Col>
      </Row>
    </Container>
  ) 
}        


export default Main;