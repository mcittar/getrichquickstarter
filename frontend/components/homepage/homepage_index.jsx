import React from 'react';
import ProjectBlurb from './project_blurb';
import { Link } from 'react-router';

class HomepageIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.updateProjects();
  }

  render() {
    const keys = Object.keys(this.props.projects);
    const projects = keys.map(key => {
      let project = this.props.projects[key];
      return <li key={ project.id }><ProjectBlurb project={ project } /></li>;
    });

    return(
      <section className='home'>

        <section className='home-video-container'></section>

        <div className='projects-header'>Popular Projects</div>
        
        <section className='projects-container'>

          <ul className='projects-list'>
            { projects }
          </ul>

        </section>

      </section>
    );
  }
}

export default HomepageIndex;
