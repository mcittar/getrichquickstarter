import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECT:
      return action.project;
    default:
      return state;
  }
};

export default ProjectsReducer;
