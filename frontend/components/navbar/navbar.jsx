import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  userLogout() {
    this.props.logout();
  }

  render() {

    let rightNav;
    if (this.props.currentUser) {
      rightNav = (
        <li>
          <button onClick={ this.userLogout.bind(this) }>Logout</button>
        </li>
      );
    } else {
      rightNav = (
        <ul>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Log In</Link></li>
        </ul>
      );
    }

    return (
      <ul>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/'><h3>GetRichQuickStarter</h3></Link></li>
        <li>{ rightNav }</li>
      </ul>
    );
  }
}

export default NavBar;
