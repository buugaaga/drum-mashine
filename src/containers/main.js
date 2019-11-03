
import React from 'react';
import { connect } from 'react-redux';

import { addTrigger, addAllSounds } from '../actions';
import Main from '../components/main';


class App extends React.Component {
  
  

  render() {
    console.log(this.props)
    
    return (
    <Main 
      addAllSounds={this.props.addAllSounds}
      bankSound={this.props.state.bankSound}
    />
    )
  }
}


const mapStateToProps = (state) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyTrigger: (letter) => dispatch(addTrigger(letter)),
    addAllSounds: (all) => dispatch(addAllSounds(all))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);