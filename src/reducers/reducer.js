
import { keysTrigger, bankSound } from '../actions';


const initialState = { bankSound: bankSound};

const reducer = (state = initialState, action) => {
  
  if (keysTrigger.includes(action.type) ) {
    return Object.assign({}, state, action.soundData);
  } else if (action.type === "ALL") {
    return Object.assign({}, state, action.soundData)
  }

  return state;
  
}

export default reducer;