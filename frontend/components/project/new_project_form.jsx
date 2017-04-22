import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_state: "",
      creator_id: 0,
      city: "",
      state: "",
      title: "",
      organization: "",
      video_url: "",
      end_date: "",
      project_pic: "",
      description: "",
      short_description: "",
      funding_goal: 0,
      reward_attributes: []
    };
  }

  componentDidMount(){
    this.props.getTags();
    this.setState( { creator_id: this.props.currentUser.id } );
    this.setState( { organization: this.props.currentUser.username } );
  }

  updateAttributes(attribute){
    return (e) => {
      this.setState({ [attribute]: e.currentTarget.value });
    };
  }

  submit(){
    this.props.createProject(this.state);
  }

  redirectOnSuccess(id) {
		this.props.router.push(`/projects/${id}`);
	}

  handleImage(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      (error, image) => {
        if (error === null) {
          this.setState({ project_pic: image[0].url, image_status: "Image successfully loaded" });
        } else {
          this.setState({ image_status: 'Image failed to load'});
        }
      });
  }

  upDateReward(field, idx) {
   return e => {
     this.state.reward_attributes[idx][field] = e.currentTarget.value;
     this.setState( { reward_attributes: this.state.reward_attributes } );
   };
 }

  addReward () {
    let newRewards = this.state.reward_attributes.slice(0);
    newRewards.push( { title: "", description: "", amount: 1, } );
    this.setState( { reward_attributes: newRewards} );
 }

 deleteReward() {
   if(this.state.reward_attributes.length > 0) {
     let newRewards = this.state.reward_attributes.slice(0);
     newRewards.pop();
     this.setState( { reward_attributes: newRewards } );
   }
 }

  render() {
    let allTags;
    if (this.props.tags.length > 0) {
      allTags = this.props.tags.map(tag => {
        return <option key={ tag.tag }>{ tag.tag }</option>;
      });
    }

    let errorList;
    if (this.props.errors.length > 0) {
      errorList = this.props.errors.map(error => {
        return <li key={ error }>{ error }</li>;
      });
    }

    return (
      <div className='new-project'>
          <section className='new-project-wrapper'>


            <section className='new-project-header' >
              <h1>Let's get started.</h1>
              <div>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</div>
            </section>

            <form className='new-project-form'>

              <ul className='new-project-choices'>



                <li className='image-select'>
                  <div>Project Image</div>

                  <span className='image-button-wrapper'>
                    <button onClick={ this.handleImage.bind(this) }>Upload Image</button>
                    <span>{ this.state.image_status }</span>
                  </span>

                </li>
                <li className='title-select'>
                  <div>Project Title</div>
                  <input onChange={ this.updateAttributes('title') }></input>
                </li>
                <li className='short-description-select'>
                  <div>Short Blurb</div>
                  <input onChange={ this.updateAttributes('short_description') }></input>
                </li>
                <li className='category-select'>
                  <div>Category</div>
                  <select>
                    { allTags }
                  </select>
                </li>
                <li className='location-select'>
                  <div>Project Location</div>

                  <span>
                    <input placeholder='City' onChange={ this.updateAttributes('city') }></input>
                    <input placeholder='State' onChange={ this.updateAttributes('state') }></input>
                  </span>

                </li>
                <li className='duration-select'>
                  <div>Project End Date</div>
                  <input type='date' onChange={ this.updateAttributes('end_date') }></input>
                </li>
                <li className='funding-goal-select'>
                  <div>Funding Goal</div>
                  <input type='number' onChange={ this.updateAttributes('funding_goal') }></input>
                </li>
                <li className='description-select'>
                  <div>Full Description</div>
                  <textarea onChange={ this.updateAttributes('description') }></textarea>
                </li>

                <section className='new-project-errors'>
                  <ul>
                    { errorList }
                  </ul>
                </section>
              </ul>




            </form>

            <section className="project-create-rewards-container">
              <h1 className="project-create-rewards-header">Add reward tiers to your project</h1>

              <div className="project-create-rewards-list">

                {this.state.reward_attributes.map( (reward, idx)=>{
                  return(
                    <ul key={idx} className="project-create-rewards-el">
                      <li>
                        <div>Title</div>
                        <input type="text"
                          className="project-create-rewards-input"
                          value={ reward.title }
                          onChange={this.upDateReward('title', idx)}
                        />
                      </li>
                      <li>
                        <div>Description</div>
                        <textarea
                            className="project-create-rewards-textarea"
                            value={ reward.description }
                            onChange={this.upDateReward('description', idx)}
                          />
                      </li>
                      <li>
                        <div>Value</div>
                        <input
                            className="project-create-rewards-input"
                            value={ reward.amount }
                            onChange={this.upDateReward('amount', idx)}
                          />
                      </li>
                  </ul>
                  );
                })}

              </div>

              <div className="project-form-reward-buttons">
                <button className="project-add-reward-button" onClick={ this.addReward.bind(this) }>Add Reward</button>
                <button className="project-add-reward-button" onClick={ this.deleteReward.bind(this) }>Delete Reward</button>
              </div>

            </section>

            <div className='button-wrapper'>
              <button onClick={ this.submit.bind(this) }>Create project</button>
            </div>
            
          </section>
      </div>
    );
  }
}

export default withRouter(NewProjectForm);
