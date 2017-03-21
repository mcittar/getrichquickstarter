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
    const { projects } = this.props;
    const keys = Object.keys(this.props.projects);
    const outProjects = keys.map(key => {
      let smallProject = projects[key];
      return <li key={ smallProject.id }><ProjectBlurb project={ smallProject } /></li>;
    });

    return(
      <section className='home'>

        <section className='home-video-container'></section>

        <div className='projects-header'>Popular Projects</div>

        <section className='projects-container'>

          <ul className='projects-list'>
            { outProjects }
          </ul>

        </section>

      </section>
    );
  }
}

export default HomepageIndex;
