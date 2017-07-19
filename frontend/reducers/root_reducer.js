import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer
});

export default RootReducer;
