

import { dataSounds1, dataSounds2 } from '../dataOfSounds';

const initialState = { bankSound: dataSounds1};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TWO":
      return Object.assign({}, state, { bankSound: dataSounds2 });
    case "ONE":
      return Object.assign({}, state, { bankSound: dataSounds1 })
    default:
      return state;
    }
  
}

export default reducer;