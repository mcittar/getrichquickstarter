import { connect } from 'react-redux';
import { scrapeProject, postComment } from '../../actions/project_actions';
import FullProject from './full_project';

const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.params.projectId,
    project: state.project,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postComment: (comment) => dispatch(postComment(comment)),
  getProject: () => dispatch(scrapeProject(ownProps.params.projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullProject);
