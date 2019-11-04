
import React from 'react';
import { connect } from 'react-redux';

import { addTrigger, addAllSounds } from '../actions';
import Main from '../components/main';



class App extends React.Component {
 
  // обрабатывает клик кнопки и воспроизводит звук для каждой кнопки и вызывает функцию добавление название звука
  handleClick(e) {
    let audioButton = new Audio(e.target.dataset.url);
    audioButton.play()
    displayNameOfSound(e.target.dataset.name)
  }

  render() {
    console.log(this.props)
    
    return (
    <Main 
      handleClick={this.handleClick}
      addAllSounds={this.props.addAllSounds}
      bankSound={this.props.state.bankSound}
    />
    )
  }
}

//нахожу display and отпраляю туда текст звука
const displayNameOfSound = (name) => {
  let display = document.getElementById('display');
  display.innerHTML = `<h3>${name}</h3>`;
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