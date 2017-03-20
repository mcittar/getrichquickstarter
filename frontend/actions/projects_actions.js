import * as APIUtil from '../util/projects_api_util';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const scrapeProjects = () => dispatch => (
  APIUtil.scrapeProjects()
    .then((projects) => (dispatch(receiveProjects(projects))))
);

export const addProject = project => dispatch => (
  APIUtil.addProject(project)
    .then(() => (dispatch(receiveProject(project))))
);

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});
