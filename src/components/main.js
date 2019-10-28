import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import  { keysTrigger, addTrigger } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      autoPlay: false
    }

    this.playSound = this.playSound.bind(this);
  }
  // componentWillMount() {
  //   this.props.keyTrigger();
  // }

  playSound(e) {
    console.log(e);
    this.setState({
      autoPlay: !this.state.autoPlay
    })
    
  }
  
  render() {
    // let { url } = this.props.state;
    
    console.log(this.props.state)
    // console.log(url);
    return (
      <Container>
        
        <Row className="align-items-center">
          
          <Col md={6} className='wrapper'>
          
            { keysTrigger.map( (val, i) => (
            <div className='button' onClick={this.playSound} key={i} variant='primary' size="lg">
              {val}
              <audio autoPlay={this.state.autoPlay} src={val.url}/>
            </div>
            ))}
            
          </Col>
          
        </Row>
      </Container>
    )
      
  }        
}

export default Main;