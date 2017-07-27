import { connect } from 'react-redux';
import UserIndex from './user_index';
import { selectAllUsers } from '../../reducers/selectors';
import { fetchUsers, fetchUsersSearch } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  users: selectAllUsers(state),
  currentUser: state.session.currentUser,
  questions: state.question.questions

});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (distance) => dispatch(fetchUsers(distance)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchUsersSearch: (search_params) => dispatch(fetchUsersSearch(search_params))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
