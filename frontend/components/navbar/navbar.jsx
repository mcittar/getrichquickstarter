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
        <li>
          <Link to='/signup'>
            Sign Up
          </Link>
          <Link to='/login'>
            Log In
          </Link>
        </li>
      );
    }

    return (
      <ul>
        <li><Link to='/discover'>Discover</Link></li>
        <li><h3>GetRichQuickStarter</h3></li>
        { rightNav }
      </ul>
    );
  }
}

export default NavBar;
