import Discover from './discover';
import { connect } from 'react-redux';
import { scrapeTags } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => ({
  getTags: () => dispatch(scrapeTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
