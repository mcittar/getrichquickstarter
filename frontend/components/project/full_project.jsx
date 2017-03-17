import React from 'react';
import ReactDOM from 'react-dom';
import Reward from './reward';

class FullProject extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.getProject();
  }

  render(){
    const { project } = this.props;

    let projectRewards;
    if (project.rewards) {
      const rewardKeys = Object.keys(project.rewards);
      projectRewards = rewardKeys.map(key => {
        return <Reward key={ key } reward={ project.rewards[key] } />;
      });
    }

    return(
      <section className='full-project-section'>
        <section className='full-project-wrapper'>

          <section className='project-top'>

            <section className='project-top-header-section'>

              <ul className='project-title'>
                <div>
                  <li><h1>{ project.title }</h1></li>
                  <li className='project-title-description'>{ project.short_description }</li>
                  <div><span>By </span>{ project.organization }</div>
                </div>
              </ul>
            </section>

            <section className='project-top-video-section'>
              <iframe className='project-video' src={ project.video_url } allowFullScreen></iframe>

              <section className='project-top-details'>
                { project.funding_goal }
              </section>
            </section>

          </section>


          <section className='project-body'>
            <section className='project-body-description'>
              { project.description }
            </section>

            <ul className='project-body-rewards'>
              { projectRewards }
            </ul>
          </section>

        </section>
      </section>
    );
  }
}

export default FullProject;
