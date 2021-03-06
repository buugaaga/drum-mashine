import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import  { keysTrigger } from '../dataOfSounds';

import Display from './display';
import Trigger from './trigger';
import { Buttons } from './buttons';


const Main = (props) => {
  console.log(props)
  return (
    <Container id='drum-machine'>
      <Row className="align-items-center">
        <Col md={6} xs={12} className='wrapper'>
        { keysTrigger.map( (val, i) => (
              <Buttons 
                key={i}
                id={props.bankSound[i].id}
                dataUrl={props.bankSound[i].url}
                dataName={props.bankSound[i].id}
                handleClickOfButtons={props.handleClick}
                letterVal={val}
              />
            )
          )
        }
        </Col>
        <Col  md={6} className="">
          <Trigger 
            triggerHandle={props.triggerHandle}
          />
          <Display />
        </Col>
      </Row>
    </Container>
  ) 
}        


export default Main;