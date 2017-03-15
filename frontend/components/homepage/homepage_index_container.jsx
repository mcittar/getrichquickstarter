import HomepageIndex from './homepage_index';
import { connect } from 'react-redux';
import { scrapeProjects } from '../../actions/projects_actions';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  updateProjects: () => dispatch(scrapeProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageIndex);
