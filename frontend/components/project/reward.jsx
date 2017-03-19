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
        <div className='amount'>Pledge ${ reward.amount }</div>
        <div className='title'>{ reward.title }</div>
        <div className='description'>{ reward.description }</div>

        <div className='delivery'><span>ESTIMATED DELIVERY</span><br></br>{ reward.delivery_date }</div>
        <div className='backers'><span>2345 backers</span></div>

        <div className='reward-divider'>-----------------------------------------------------------------</div>

        <div className='pledge-box'>
          <span>PLEDGE AMOUNT</span>
          <div className='currency'>
            <i>$</i>
            <input type='text' className='pledge-input'></input>
          </div>
        </div>

        <button className='backer-button'>Continue</button>
        <div>{ reward.limit }</div>
      </section>
    );
  }
}

export default Reward;
