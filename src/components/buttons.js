import React from 'react';

const Buttons = ({dataUrl, letterVal, dataName, handleClickOfButtons, id}) => {
  return (
  <div 
    id={id}
    data-letter={letterVal}
    className='button drum-pad'  
    data-name={dataName} 
    onClick={handleClickOfButtons}
  >
      {letterVal}
      <audio src={dataUrl} id={letterVal}></audio>
  </div>
  )
}

export { Buttons };