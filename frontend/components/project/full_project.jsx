import React from 'react';
import ReactDOM from 'react-dom';
import RewardContainer from './reward_container';
import NumberFormat from 'react-number-format';
import { Line } from 'rc-progress';

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

    let dateEnd = new Date(project.end_date);
    let dateStart = new Date();
    let timeDiff = Math.abs(dateStart.getTime() - dateEnd.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

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
                <content className='project-line-container'>
                  <Line percent={ project.line_percentage } strokeWidth='2' strokeColor='#2BDE73'/>
                </content>
                <content className='full-project-current-funding-spacer'>
                  <NumberFormat
                    value={ project.contributions }
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    className='full-project-current-funding'
                  />
                </content>
                <content className='full-project-total-funding'>pledged of <NumberFormat
                                      value={ project.funding_goal }
                                      displayType={'text'}
                                      thousandSeparator={true}
                                      prefix={'$'}
                                    /> goal
                                </content>
                <content className='full-project-total-backers'>{ project.backers }</content>
                <content className='backers-backers'>backers</content>
                <content className='full-project-days-left'>{ diffDays }</content>
                <content className='days-left'>days left</content>
              </section>
            </section>

          </section>


          <section className='full-project-body'>

            <section className='full-project-body-wrapper'>

              <section className='project-body-description-wrapper'>
                <section className='full-project-about'>About this project</section>
                <section className='project-body-description'>
                  { project.description }
                </section>
              </section>

              <section className='full-project-rewards-wrapper'>
                <content className='full-project-support'>Support this project</content>
                <ul className='project-body-rewards'>
                  { projectRewards }
                </ul>
              </section>

            </section>

            </section>

      </section>
    );
  }
}

export default FullProject;
