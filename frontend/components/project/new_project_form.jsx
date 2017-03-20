import React from 'react';
import merge from 'lodash/merge';

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      rewards: []
    };
  }

  componentDidMount(){
    this.props.getTags();
  }

  updateAttributes(attribute){
    return (e) => {
      this.setState({ [attribute]: e.currentTarget.value });
    };
  }

  submit(){
    this.props.createProject(this.state);
  }

  upDateReward(field, idx) {
   return e => {
     this.state.rewards[idx][field] = e.currentTarget.value;
     this.setState({rewards: this.state.rewards});
   };
 }

  addReward () {
    let newRewards = this.state.rewards.slice(0);
    newRewards.push( {title: "", body: "", cost: 1, } );
    this.setState( {rewards: newRewards} );
 }

 deleteReward() {
   if(this.state.rewards.length > 0) {
     let newRewards = this.state.rewards.slice(0);
     newRewards.pop();
     this.setState( { rewards: newRewards } );
   }
 }

  render() {

    let allTags;
    if (this.props.tags.length > 0) {
      allTags = this.props.tags.map(tag => {
        return <option key={ tag.tag }>{ tag.tag }</option>;
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
                  <input onChange={ this.updateAttributes('project_pic') }></input>
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
                  <input onChange={ this.updateAttributes('funding_goal') }></input>
                </li>
                <li className='description-select'>
                  <div>Full Description</div>
                  <textarea onChange={ this.updateAttributes('description') }></textarea>
                </li>
              </ul>

              <div className='button-wrapper'>
                <button onClick={ this.submit.bind(this) }>Create project</button>
              </div>
            </form>

            <section className="project-create-rewards-container">
              <h1 className="project-create-rewards-header">Rewards!</h1>

              <div className="project-create-rewards-list">

                {this.state.rewards.map( (reward, idx)=>{
                  return(
                    <div key={idx} className="project-create-rewards-el">
                      <input type="text"
                        className="project-create-rewards-input"
                        value={reward.title}
                        onChange={this.upDateReward('title', idx)}
                        placeholder="Title"
                      />
                    <textarea
                        className="project-create-rewards-input project-create-rewards-textarea"
                        value={reward.body}
                        onChange={this.upDateReward('body', idx)}
                        placeholder="Description"
                      />
                    <text className=".project-create-rewards-label">
                      Cost
                    </text>
                    <input type="number"
                        className="project-create-rewards-input"
                        value={reward.cost}
                        onChange={this.upDateReward('cost', idx)}
                        placeholder="Cost"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="project-form-reward-buttons">
                <button className="project-add-reward-button" onClick={ this.addReward.bind(this) }>Add Reward</button>
                <button className="project-add-reward-button" onClick={ this.deleteReward.bind(this) }>Delete Reward</button>
              </div>

            </section>
          </section>
      </div>
    );
  }
}

export default NewProjectForm;
