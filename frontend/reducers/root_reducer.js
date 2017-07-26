import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import ProfileReducer from './profile_reducer';
import QuestionReducer from './question_reducer';
import ResponseReducer from './response_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  currentProfile: ProfileReducer, //nested twice seen in reducer
  users: UserReducer,
  question: QuestionReducer,
  response: ResponseReducer,
  modal: ModalReducer
});

export default RootReducer;
