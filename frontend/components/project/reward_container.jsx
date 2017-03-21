import { connect } from 'react-redux';
import Reward from './reward';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Reward);
