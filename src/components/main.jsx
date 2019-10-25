import React from 'react';

const Main = ({input, messages, onChange, submitMessage, reset}) => {

  return (
    <div className="container">
      <div className="wrapper">
        <input className="input" value={input} onChange={onChange} type="text"></input>
        <button onClick={submitMessage}>click me</button>
        <button className="reset" onClick={reset}>reset</button>
       
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

export default Main;