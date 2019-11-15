
import React from 'react';
import { connect } from 'react-redux';

import { addTrigger, addAllSounds, keysTrigger } from '../actions';
import Main from '../components/main';



class App extends React.Component {
  

  componentDidMount() {
    console.log("mounted")
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() { 
    console.log("unmounted")
    document.removeChild("keydown", this.handleKeyDown);
  }
  //добаваляет слушатель события нажатия клавиши
  handleKeyDown(e) {
    console.log(e.key.toUpperCase());
    if(keysTrigger.includes(e.key.toUpperCase())) {
      playSound(e.key.toUpperCase());
    }
  }

  // обрабатывает клик кнопки и вызывает функцию воспроизведения звука и вызывает функцию добавление названия звука
  handleClick(e) {
    console.log(e.target.dataset.letter)
    playSound(e.target.dataset.letter)
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

//находит элемент аудио и воспроизводит звук
function playSound(letter) {
  let sound = document.getElementById(letter);
  sound.play();
}

//нахожу display и отпраляю туда текст звука
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