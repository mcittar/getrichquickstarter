import { connect } from 'react-redux';
import { scrapeFilteredProjects } from '../../actions/projects_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects,
  phrase: ownProps.params.searchPhrase
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProjects: (filter) => dispatch(scrapeFilteredProjects(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
