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
      <div>
        { project.title }
      </div>
    );
  }
}

export default FullProject;
