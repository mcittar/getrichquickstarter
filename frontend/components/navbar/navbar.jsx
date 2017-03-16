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
          <span className='logout' onClick={ this.userLogout.bind(this) }>Logout</span>
      );
    } else {
      rightNav = (
        <ul>
          <li className="login"><Link to='/login'>Log In</Link></li>
          <li className='signup'><Link to='/signup'>Sign Up</Link></li>
        </ul>
      );
    }

    return (
      <nav className="main-nav">
        <ul className='left-nav'>
          <li>
            <Link to='/discover'>
              <div className="discover-wrapper">
                <i className="fa fa-compass" aria-hidden="true"></i>
                <div className='nav-discover'>Discover</div>
              </div>
            </Link>
          </li>
          <li className="create ">Create a Project</li>
        </ul>
        <ul className="center-nav">
          <li><Link to='/'>
            <div className='logo-wrapper'>
              <div className='left-logo'>GetRichQuick</div>
              <div className='right-logo'>Starter</div>
            </div>
          </Link></li>
        </ul>
        <ul className='right-nav'>
          <li><i className="fa fa-search"></i></li>
          <li>{ rightNav }</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
