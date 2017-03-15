import Homepage from './homepage';
import { connect } from 'react-redux';

const mapStateToProps = state => {

  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
