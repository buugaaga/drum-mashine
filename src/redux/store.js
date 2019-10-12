import { createStore } from 'redux';


const EX = 'EX';

// const actionCreator = () => {
//   return ({
//     type: EX,
//     message: 'hi'
//   })
// }

const reducer = (state = 'nothing', action) => {
  switch(action.type) {
    case EX:
      return [...state, action.message];
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;