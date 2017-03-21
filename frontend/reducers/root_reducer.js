import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import ProjectReducer from './project_reducer';
import TagReducer from './tag_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  project: ProjectReducer,
  tags: TagReducer,
  errors: ErrorsReducer
});

export default RootReducer;
