import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { ADD, RESET } from '../actions';



class Main extends Component {

  // handleInput(e) {
  //   this.props.input
  // }

  // submitMessage() {
  //   this.props.messages.concat(this.props.input)
  // }
  // reset() {
  //   this.setState({
  //     messages: []
  //   })
  // }

  render () {
    let messages = this.props.messages;
    return (
      <div className="container">
        <div className="wrapper">
          <input className="input" value={this.props.input} onChange={this.props.onChange} type="text"></input>
          <button onClick={this.props.submitMessage}>click me</button>
          <button className="reset" onClick={this.props.reset}>reset</button>
         
          <div className="list">
            <ul>
              {messages.map( (val, i) => {
                if(val) {
                  return (<li key={i}>{val}</li>);
                  }
                return null;
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) =>
      dispatch({
        type: 'INPUT',
        input: event.target.value
      }),
    submitMessage: () =>
      dispatch({
        type: 'ADD'
      }),
    reset: () =>
      dispatch({
        type: 'RESET'
      })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);