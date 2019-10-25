
import { connect } from 'react-redux';

import Main from '../components/main';

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