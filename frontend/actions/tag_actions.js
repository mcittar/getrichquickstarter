import * as APIUtil from '../util/tag_api_util';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

export const scrapeTags = () => dispatch => (
  APIUtil.scrapeTags()
  .then(tags => dispatch(receiveTags(tags)))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});
