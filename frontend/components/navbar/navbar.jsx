import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search_status: false
    };
  }

  userLogout() {
    this.props.logout();
  }

  toggleSearch() {
    const newStatus = !this.state.search_status;
    this.setState({ search_status: newStatus });
  }

  render() {

    let rightNav;
    if (this.props.currentUser) {
      rightNav = (
          <span className='logout hvr-underline-reveal' onClick={ this.userLogout.bind(this) }><span>Logout</span></span>
      );
    } else {
      rightNav = (
        <ul>
          <li className="login hvr-underline-reveal"><Link to='/login'>Log In</Link></li>
          <li className='signup hvr-underline-reveal'><Link to='/signup'>Sign Up</Link></li>
        </ul>
      );
    }

    return (
      <nav className="main-nav">
        <ul className='left-nav'>
          <li className='discover-li'>
            <Link to='/discover'>
              <div className="discover-wrapper">

                <div className='nav-discover hvr-underline-reveal'><div className='discovery '><i className="fa fa-compass" aria-hidden="true"></i><span>Discover</span></div></div>
              </div>
            </Link>
          </li>
          <li className="create hvr-underline-reveal"><Link to='/new'>Create a Project</Link></li>
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
          <li onClick={ this.toggleSearch.bind(this) }><i className="fa fa-search"></i></li>
          <li>{ rightNav }</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
