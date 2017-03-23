import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <footer className='footer-component'>
        <content>
          Michael Cittar
        </content>
          <a href='https://github.com/mcittar'>https://github.com/mcittar</a>
      </footer>
    );
  }
}

export default Footer;
