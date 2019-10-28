
import { connect } from 'react-redux';

import { addTrigger } from '../actions';
import Main from '../components/main';


const mapStateToProps = (state) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyTrigger: () => dispatch(addTrigger('A'))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);