
import { connect } from 'react-redux';

import Main from '../components/main';

const mapStateToProps = (state) => {
  return {state};
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (event) =>
//       dispatch({
//         type: 'INPUT',
//         input: event.target.value
//       }),
//     submitMessage: () =>
//       dispatch({
//         type: 'ADD'
//       }),
//     reset: () =>
//       dispatch({
//         type: 'RESET'
//       }),
//     didMount: () => 
//       dispatch({
//         type: 'DID-MOUNT'
//       })
//     }
// }


export default connect(mapStateToProps)(Main);