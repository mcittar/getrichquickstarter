import React from 'react';

class ProjectBlurb extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { project } = this.props;
    return(
      <div className='project-blurb'>

        <div className='blurb-header'>
          <img className='blurb-image' src={ project.project_pic }/>
        </div>

        <div className='blurb-middle'>
          <span>{ project.title }</span>
          <span>{ project.user }</span>
          <span>{ project.description }</span>
        </div>

        <div className='blurb-footer'>
          <span>{ project.organization }</span>
          <span>{ project.city }</span>
          <span>{ project.state }</span>
          <span>{ project.end_date }</span>
        </div>

      </div>
    );
  }
}

export default ProjectBlurb;
