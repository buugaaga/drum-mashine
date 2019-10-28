
import { keysTrigger } from '../actions';


const initialState = {};

const reducer = (state = initialState, action) => {
  
  if (keysTrigger.includes(action.type) ) {
    return Object.assign({}, state, action.soundData);
  }
  return state;
  
}

export default reducer;