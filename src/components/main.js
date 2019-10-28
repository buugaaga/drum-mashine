import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import  { keysTrigger } from '../actions';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      autoPlay: true
    }

    // this.playSound = this.playSound.bind(this);
  }
  // componentWillMount() {
  //   this.props.keyTrigger();
  // }

  // playSound(e) {
  //   console.log(e);
  //   this.props.keyTrigger();
    
  // }
  
  render() {
    let { url } = this.props.state;
    
    console.log(this.props)
    // console.log(url);
    return (
      <Container>
        
        <Row className="align-items-center">
          
          <Col md={6} className='wrapper'>
          
            { keysTrigger.map( (val, i) => (
            <div className='button' onClick={() => this.props.keyTrigger(val)} key={i} variant='primary' size="lg">
              {val}
              <audio autoPlay={this.state.autoPlay} src={this.props.state.url}/>
            </div>
            ))}
            
          </Col>
          <Col md={6}>
            <h3>{this.props.state.id}</h3>
          </Col>
          
        </Row>
      </Container>
    )
      
  }        
}

export default Main;