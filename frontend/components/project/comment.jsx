import React from 'react';

class ProjectComment extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' +yyyy;

    return(
      <li className='full-comment-wrapper'>
        <div className='comment-header'>
          <div className='comment-author'>{ this.props.author }</div><div className='comment-date'>{ today }</div>
        </div>

        <div className='comment-body'>{ this.props.body }</div>
      </li>
    );
  }
}

export default ProjectComment;
