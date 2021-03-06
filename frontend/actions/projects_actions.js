import * as APIUtil from '../util/projects_api_util';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';
import { hashHistory } from 'react-router';

export const scrapeProjects = () => dispatch => (
  APIUtil.scrapeProjects()
    .then((projects) => (dispatch(receiveProjects(projects))))
);

export const scrapeFilteredProjects = (filter) => dispatch => (
  APIUtil.scrapeFilteredProjects(filter)
    .then((projects) => (dispatch(receiveProjects(projects))))
);

export const addProject = project => dispatch => (
  APIUtil.addProject(project)
    .then((returnProject) => {
      dispatch(receiveProject(returnProject));
      hashHistory.push(`/projects/${(Object.keys(returnProject))[0]}`);
    })
    .fail((errors) => (dispatch(receiveErrors(errors.responseJSON))))
);

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_FORM_ERRORS,
    errors
  });
};

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});
