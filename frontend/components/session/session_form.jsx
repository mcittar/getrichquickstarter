import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.clearData();
      this.props.clearErrors();
    }
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  updateAttributes(attribute){
    return (e) => {
      this.setState({ [attribute]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  clearData(){
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  demoSubmit(e){
    e.preventDefault();
    this.props.demoLogin();
  }

  render(){
    let name;
    let title;
    let button;
    if (this.props.formType === 'login') {
      title = "Log in";
      name = "";
      button = 'Log me in!';
    } else {
      title = "Sign up";
      name = <input placeholder="Username" value={ this.state.username } onChange={ this.updateAttributes('username') }/>;
      button = 'Sign me up!';
    }

    let errors;
    if (this.props.errors !== []) {
      errors = this.props.errors.map(error => {
        return <li key={ error }>{ error }</li>;
      });
    } else {
      errors = "";
    }

    return(
      <section className='auth-form-section'>
        <form className='auth-form'>
          <h2 className='auth-title'>{ title }</h2>
          <section>
            <ul className='auth-errors'>{ errors }</ul>
          </section>
            { name }
            <input placeholder="Email" value={ this.state.email } onChange={ this.updateAttributes('email') }/>
            <input type='password' value={ this.state.password } placeholder="Password" onChange={ this.updateAttributes('password') }/>
            <button className='auth-submit' onClick={ this.handleSubmit.bind(this) }>{ button }</button>
            <span> - or -</span>
            <button className='auth-demo-button' onClick={ this.demoSubmit.bind(this) }>Use Demo Account</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);
