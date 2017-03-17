import { connect } from 'react-redux';
import { scrapeProject } from '../../actions/project_actions';
import FullProject from './full_project';

const mapStateToProps = (state, ownProps) => {

  return {
    id: ownProps.params.projectId,
    project: state.project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProject: () => dispatch(scrapeProject(ownProps.params.projectId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullProject);
