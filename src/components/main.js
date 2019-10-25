import React from 'react';
import DrumPad from './drumPad';

class Main extends React.Component {
  
  

  render() {
   return (
    <div className='container' id='drum-machine' >
      <DrumPad props={this.props.state}/>
      
    </div>
   )
    
  }         
              
}

export default Main;