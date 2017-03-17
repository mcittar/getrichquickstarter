import React from 'react';

class Reward extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contributor_id: 0,
      reward_id: this.props.id,
      amount: 0
    };
  }

  render(){
    const { reward } = this.props;
    return(
      <section className='reward-container'>
        <div>Pledge ${ reward.amount }</div>
        <div>{ reward.title }</div>
        <div>{ reward.description }</div>
        <div>{ reward.delivery_date }</div>
        <input></input>
        <button></button>
        <div>{ reward.limit }</div>
      </section>
    );
  }
}

export default Reward;
