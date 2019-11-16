
import React from 'react';
import { connect } from 'react-redux';

import { keysTrigger } from '../dataOfSounds';
import { triggerDataSounds } from '../actions';
import Main from '../components/main';

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

  triggerHandle = (e) => {
    
    this.props.triggerDataSoundsDisptch(e);
    console.log(this.props);
  }

  render() {
    console.log(this.props)
    
    return (
    <Main 
      handleClick={this.handleClick}
      bankSound={this.props.bankSound}
      triggerHandle={this.triggerHandle}
    />
    )
  }
}



const mapStateToProps = (state) => {
  return {
    bankSound: state.bankSound
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerDataSoundsDisptch: (value) => dispatch(triggerDataSounds(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);