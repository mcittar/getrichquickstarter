import { connect } from 'react-redux';
import Reward from './reward';
import { postContribution } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postContribution: (contribution) => dispatch(postContribution(contribution))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reward);
