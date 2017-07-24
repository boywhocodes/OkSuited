import { RECEIVE_SINGLE_RESPONSE, RECEIVE_RESPONSES } from '../actions/response_actions';

const initialState = {
  currentResponse: null,
  responses: {}
};

const ResponseReducer = (state = initialState, action) => {
  Object.freeze;
  switch(action.type) {
    case RECEIVE_SINGLE_RESPONSE:
      return { currentResponse: action.response };
    case RECEIVE_RESPONSES:
      return { responses: {action.responses} };
  }
}

export default ResponseReducer;
