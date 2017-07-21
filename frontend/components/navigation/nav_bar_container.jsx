import { connect } from 'react-redux';
import { requestLogout } from '../../actions/session_actions';
import Navbar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(requestLogout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
