import { connect } from 'react-redux';
import { fetchResponses } from '../../actions/response_actions';
import { fetchQuestions } from '../../actions/question_actions';
import Questions from './questions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  profile: state.currentProfile.currentProfile,
  questions: state.question.questions,
  questionId: ownProps.questionId,
  responses: state.response
});

const mapDispatchToProps = dispatch => ({
  fetchResponses: (user_id) => dispatch(fetchResponses(user_id)),
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Questions);
