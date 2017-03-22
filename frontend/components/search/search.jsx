import React from 'react';
import ProjectBlurb from '../homepage/project_blurb';

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProjects(this.props.phrase);
  }

  render(){
    const { projects } = this.props;
    const keys = Object.keys(this.props.projects);
    const outProjects = keys.map(key => {
      let smallProject = projects[key];
      return <li className='project-blurb-li-wrapper' key={ key }><ProjectBlurb project={ smallProject } /></li>;
    });

    return(
      <section>
        <ul className='projects-list'>
          { outProjects }
        </ul>
      </section>
    );
  }
}

export default Search;
