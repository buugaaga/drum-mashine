
import { connect } from 'react-redux';

import { addTrigger } from '../actions';
import Main from '../components/main';


const mapStateToProps = (state) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyTrigger: (letter) => dispatch(addTrigger(letter))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);