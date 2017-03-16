import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const demo = {
    name: 'demo',
    email: 'demo@gmail.com',
    password: 'demopassword'
  };
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    demoLogin: () => dispatch(login(demo)),
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
