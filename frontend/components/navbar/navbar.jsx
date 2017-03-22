import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search_status: false,
      search_value: ""
    };
  }

  userLogout() {
    this.props.logout();
  }

  toggleSearch() {
    const newStatus = !this.state.search_status;
    this.setState({ search_status: newStatus });
  }

  updateSearch(e) {
    e.preventDefault();
      this.setState({ search_status: e.currentTarget.value });
  }

  submitSearch(e) {
    e.preventDefault();

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

    let searchNav = (
      <ReactCSSTransitionGroup
         className='search-nav'
         transitionName='show-search'
         transitionEnterTimeout={1000}
         transitionLeaveTimeout={1000}>

        <ul className='search-holder'>
          <li className='search-nav-search'>
            <i className="fa fa-search"></i>
            <form onSubmit={ this.submitSearch.bind(this) }>
              <input onChange={ this.updateSearch.bind(this) } placeholder='Search' type='text'></input>
            </form>
          </li>
          <li className='search-cancel' onClick={ this.toggleSearch.bind(this) }><i className="fa fa-times"></i></li>
        </ul>

      </ReactCSSTransitionGroup>
    );

    let baseNav = (
      <div className="main-nav">
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
      </div>
    );

    let currentNav = baseNav;
    if (this.state.search_status) {
      currentNav = searchNav;
    } else {
      currentNav = baseNav;
    }

    return (
      <nav className='nav-main-container'>
        { currentNav }
      </nav>
    );
  }
}

export default withRouter(NavBar);
