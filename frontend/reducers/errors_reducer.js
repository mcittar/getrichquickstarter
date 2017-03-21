import { RECEIVE_FORM_ERRORS } from '../actions/projects_actions';
import merge from 'lodash/merge';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FORM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
