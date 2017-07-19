import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer
  modal: ModalReducer
});

export default RootReducer;
