import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
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

  render(){
    let name;
    if (this.props.formType === 'login') {
      name = "";
    } else {
      name = <input placeholder="Username" onChange={ this.updateAttributes('name') }/>;
    }

    return(
      <section className='auth-form-section'>
        <form className='auth-form'>
          <h2>{ this.props.formType }</h2>
          <p>{ this.props.errors }</p>
            { name }
            <input placeholder="Email" onChange={ this.updateAttributes('email') }/>
            <input type='password' placeholder="Password" onChange={ this.updateAttributes('password') }/>
          <button onClick={ this.handleSubmit.bind(this) }>{ this.props.formType }</button>
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);
