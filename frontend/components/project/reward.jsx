import React from 'react';
import { addContribution } from '../../util/reward_api_util';

class Reward extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backer_id: this.props.currentUser.id,
      reward_id: this.props.reward.id,
      amount: 0
    };
  }

  componentDidMount(){
    this.setState({ amount: this.props.reward.amount });
  }

  changeAmount(e){
    this.setState({ amount: e.currentTarget.value });
  }

  createContribution(e){
    e.preventDefault();
    addContribution(this.state);
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
            <input type='text' value={ this.state.amount } onChange={ this.changeAmount.bind(this) } className='pledge-input'></input>
          </div>
        </div>

        <button className='backer-button' onClick={ this.createContribution.bind(this) }>Continue</button>
      </section>
    );
  }
}

export default Reward;
