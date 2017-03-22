import React from 'react';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTags();
  }

  render() {

    let allTags;
    if (this.props.tags.length > 0){
      allTags = this.props.tags.map(tag => {
        return <li key={ tag.tag }>{ tag.tag }</li>;
      });
    }

    return (
      <section className='discover-section'>
        <section className='discover-section-wrapper'>

          <h1>Categories</h1>
          <ul>
            { allTags }
          </ul>

        </section>
      </section>
    );
  }
}

export default Discover;
