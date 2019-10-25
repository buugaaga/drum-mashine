import React from 'react';


const DrumPad = ({ props }) => {

  
  return (
    <div className='wrapper'>
      {console.log(props)}
      { props.map( (item, i) => 
        <button key={i} id={item.id} className='button'>{item.keyTrigger}</button>  
      )} 
    </div>
    )
  }

  

export default DrumPad;

