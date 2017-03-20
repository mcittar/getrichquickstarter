import React from 'react';

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
      funding_goal: 0
    };
  }

  updateAttributes(attribute){
    return (e) => {
      this.setState({ [attribute]: e.currentTarget.value });
    };
  }

  render() {

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
                  <input></input>
                </li>
                <li className='location-select'>
                  <div>Project Location</div>

                  <span>
                    <input placeholder='City' onChange={ this.updateAttributes('city') }></input>
                    <input placeholder='State' onChange={ this.updateAttributes('state') }></input>
                  </span>

                </li>
                <li className='duration-select'>
                  <div>Funding Duration</div>
                  <input></input>
                </li>
                <li className='funding-goal-select'>
                  <div>Funding Goal</div>
                  <input></input>
                </li>
                <li className='video-select'>
                  <div>Project Video</div>
                  <input></input>
                </li>
                <li className='description-select'>
                  <div>Project Decription</div>
                  <input></input>
                </li>
              </ul>

              <button>Create project</button>
            </form>

          </section>
      </div>
    );
  }
}

export default NewProjectForm;
