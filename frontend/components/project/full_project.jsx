import React from 'react';
import ReactDOM from 'react-dom';
import RewardContainer from './reward_container';
import NumberFormat from 'react-number-format';

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
        return <RewardContainer key={ key } reward={ project.rewards[key] } />;
      });
    }

    let projectImage;
    if (project.video_url){
      projectImage = project.video_url;
    } else {
      projectImage = project.project_pic;
    }

    return(
      <section className='full-project-section'>

          <section className='project-top'>

            <section className='project-top-header-section'>

              <ul className='project-title'>
                <li>
                  <div><h1>{ project.title }</h1></div>
                  <div className='project-title-description'>{ project.short_description }</div>
                  <div><span>By </span>{ project.organization }</div>
                </li>
              </ul>
            </section>

            <section className='project-top-video-section'>
              <iframe className='project-video' src={ projectImage } frameBorder='0' allowFullScreen></iframe>

              <section className='project-top-details'>
                <content>
                  <NumberFormat
                            value={ project.contributions }
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                  />
                </content>
                <content>pledged of <NumberFormat
                                      value={ project.funding_goal }
                                      displayType={'text'}
                                      thousandSeparator={true}
                                      prefix={'$'}
                                    />
                </content>
                <content>{ project.backers }</content>
                <content>backers</content>
              </section>
            </section>

          </section>


          <section className='project-body'>
            <section className='project-body-description'>
              { project.description }
            </section>

            <ul className='project-body-rewards'>
              <content>Support this project</content>
              { projectRewards }
            </ul>
          </section>

      </section>
    );
  }
}

export default FullProject;
