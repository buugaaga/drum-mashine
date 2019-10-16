import React, { Component } from 'react';
import { connect } from 'react-redux';


// import DrubPad from './drum-pad';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      messages: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    })
  }
  reset() {
    this.setState({
      messages: []
    })
  }

  render () {
    let messages = this.state.messages;
    return (
      <div className="container">
        <div className="wrapper">
          <input className="input" value={this.state.input} onChange={this.handleInput} type="text"></input>
          <button onClick={this.submitMessage}>click me</button>
          <button className="reset" onClick={this.reset}>reset</button>
          <div className="list">
            <ul>
              {messages.map( (val, i) => (<li key={i}>{val}</li>))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(Main)