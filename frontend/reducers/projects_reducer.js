import { RECEIVE_PROJECTS } from '../actions/projects_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;
