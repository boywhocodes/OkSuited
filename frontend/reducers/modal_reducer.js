import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {[action.modal]: true});
      case CLOSE_MODAL:
        return Object.assign({}, state, {[action.modal]: false}); // action.modal not action.data
    default:
    return state;
  }
};

export default ModalReducer;
