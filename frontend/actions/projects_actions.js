import * as APIUtil from '../util/projects_api_util';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const scrapeProjects = () => dispatch => (
  APIUtil.scrapeProjects()
    .then((projects) => (dispatch(receiveProjects(projects))))
);

export const receiveProjects =  projects => ({
  type: RECEIVE_PROJECTS,
  projects
});
