import React from 'react';

const Buttons = ({dataUrl, letterVal, dataName, handleClickOfButtons, id}) => {
  return (
  <button
    id={id}
    data-letter={letterVal}
    className='button drum-pad'  
    data-name={dataName} 
    onClick={handleClickOfButtons}
  >
      {letterVal}
      <audio className="clip" src={dataUrl} id={letterVal}></audio>
  </button>
  )
}

export { Buttons };