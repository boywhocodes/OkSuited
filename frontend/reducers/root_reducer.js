import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  currentProfile: ProfileReducer,
  modal: ModalReducer
});

export default RootReducer;
