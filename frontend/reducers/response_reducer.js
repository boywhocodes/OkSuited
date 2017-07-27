import { RECEIVE_SINGLE_RESPONSE, RECEIVE_RESPONSES } from '../actions/response_actions';
import merge from 'lodash/merge';



const ResponseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_RESPONSE:
      let newState = merge({}, state)
      newState[action.response.question.id] = action.response
      return newState;
    case RECEIVE_RESPONSES:
      return action.responses;
    default:
        return state;
  }
}

export default ResponseReducer;
