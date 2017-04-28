import React from 'react';
import ReactDOM from 'react-dom';
import RewardContainer from './reward_container';
import NumberFormat from 'react-number-format';
import { Line } from 'rc-progress';
import { withRouter } from 'react-router';
import ProjectComment from './comment';

class FullProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: ""
    };
    this.postComment = this.postComment.bind(this);
  }

  componentWillMount(){
    window.scrollTo(0, 0);
    this.props.getProject();
  }

  updateComment(e){
    this.setState({ comment: e.currentTarget.value });
  }

  postComment(e){
    e.preventDefault();
    if(this.props.currentUser){
      let comment = {
        project_id: this.props.project.id,
        author_id: this.props.currentUser.id,
        body: this.state.comment
      };
      this.props.postComment(comment).then(() => {
        this.setState({ comment: "" });
      });
    } else {
      window.scrollTo(0, 0);
      this.props.router.push(`/signup`);
    }
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

    let projectComments;
    if (project.comments){
      projectComments = project.comments.map(comment => {
        return <ProjectComment key={ comment.id } author={ comment.author } currentUser={ this.props.currentUser } body={ comment.body }/>;
      });
      projectComments.reverse();
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

                <section className='full-project-comments'>

                    <form className='project-comment-form'>
                      <content>Leave a comment</content>
                      <textarea value={ this.state.comment }  onChange={ this.updateComment.bind(this) } className='new-comment-input'></textarea>
                      <button onClick={ this.postComment} className='comment-submit-button'>Post Comment</button>
                    </form>

                    <ul className='project-comments-list'>
                      { projectComments }
                    </ul>

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

export default withRouter(FullProject);
