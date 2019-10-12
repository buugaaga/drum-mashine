import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// import DrubPad from './drum-pad';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      messages: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
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

  render () {
    let messages = this.state.messages;
    return (
      <div className='container' id='drum-mashine'>
        <div className='row'>
          <div className='col-5'>
            <input type='text' value={this.state.input} onChange={this.handleInput}></input>
            <button onClick={this.submitMessage}>click me</button>
          </div>
          <div className='col-5'>
            <ul>
              {messages.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>

        </div>
        
      </div>
    )
  }
}