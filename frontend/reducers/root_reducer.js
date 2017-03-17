import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import ProjectReducer from './project_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  project: ProjectReducer
});

export default RootReducer;
