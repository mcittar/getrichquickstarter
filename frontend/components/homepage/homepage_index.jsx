import React from 'react';
import ProjectBlurb from './project_blurb';

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
      <section>

        <section>
          <ul>
            { projects }
          </ul>
        </section>
      </section>
    );
  }
}

export default HomepageIndex;
