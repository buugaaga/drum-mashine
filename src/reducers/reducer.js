
const initialState = {
  input: '',
  messages: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, 
        messages: state.messages.concat(state.input),
        input: ''
      };
    case 'RESET':
      return {
        ...state,
        input: '',
        messages: []
      };
    case 'INPUT':
      return {
        ...state,
        input: action.input
        }
      
    default:
      return state;
  }
}

export default reducer;