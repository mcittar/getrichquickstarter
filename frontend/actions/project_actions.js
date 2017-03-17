import * as APIUtil from '../util/project_api_util';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const scrapeProject = (id) => dispatch => {
  return(
    APIUtil.scrapeProject(id)
      .then((project) => (dispatch(receiveProject(project))))
  );
};

export const receiveProject =  project => ({
  type: RECEIVE_PROJECT,
  project
});