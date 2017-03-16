import React from 'react';

class ProjectBlurb extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { project } = this.props;
    return(
      <div className='project-blurb'>

        <section className='top-wrapper'>

          <div className='blurb-header'>
            <img className='blurb-image' src={ project.project_pic }/>
          </div>

          <div className='blurb-middle'>
            <strong>{ project.title }</strong>
            <h3 className='blurb-org'>{ project.organization }</h3>
            <h3 className='blurb-description'>{ project.short_description }</h3>
          </div>

        </section>

        <div className='blurb-footer'>
          <span>{ project.city }</span>
          <span>{ project.state }</span>
          <span>{ project.end_date }</span>
        </div>

      </div>
    );
  }
}

export default ProjectBlurb;
