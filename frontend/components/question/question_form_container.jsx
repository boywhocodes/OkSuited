import { connect } from 'react-redux';
import { createResponse, fetchResponses } from '../../actions/response_actions';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionForm from './question_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  responses: state.response.responses,
  questions: state.question.questions
});

const mapDispatchToProps = dispatch => ({
  createResponse: (response) => dispatch(createResponse(response))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(QuestionForm);
