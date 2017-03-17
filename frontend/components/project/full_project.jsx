import React from 'react';

class FullProject extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getProject();
  }

  render(){
    const { project } = this.props;
    return(
      <section className='full-project-section'>
        { project.title }
      </section>
    );
  }
}

export default FullProject;
