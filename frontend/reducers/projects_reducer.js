import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/projects_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      let newState = merge({}, state, action.project);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
