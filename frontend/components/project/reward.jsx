import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import NumberFormat from 'react-number-format';

class Reward extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backer_id: 0,
      reward_id: this.props.reward.id,
      amount: 0,
      status: true,
      modalStatus: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
     Modal.setAppElement('body');
  }

  componentDidMount(){
    if (this.props.currentUser) {
      this.setState({ backer_id: this.props.currentUser.id } );
    }
    this.setState({ amount: this.props.reward.amount });
  }

  changeAmount(e) {
      this.setState({ amount: e.currentTarget.value });
      if (this.state.amount < this.props.reward.amount) {
        this.state.status = false;
      } else {
        this.state.status = true;
      }
  }

  openModal() {
   this.setState({modalStatus: true});
 }

  closeModal() {
    this.setState({modalStatus: false});
  }

  createContribution(e){
    e.preventDefault();
    if (this.props.currentUser){
      if (this.state.amount >= this.props.reward.amount){
        this.props.postContribution(this.state)
          .then(() => {
            this.openModal();
          });
      }
    } else {
      this.props.router.push(`/signup`);
    }
  }

  render(){
    const { reward } = this.props;
    let box = 'pledge-input';
    if (this.state.status) {
      box = 'pledge-input';
    } else {
      box = 'pledge-input box-red';
    }

    return(
      <section className='reward-container'>

        <Modal
          isOpen={this.state.modalStatus}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          className='reward-modal'
        >
          <content className='modal-title'>You have pledged </content>
          <NumberFormat
            value={ this.state.amount }
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            className='amount'
          />
        <content className='modal-title'>Thank you for your contribution!</content>
        </Modal>

        <div className='amount'>Pledge ${ reward.amount }</div>
        <div className='title'>{ reward.title }</div>
        <div className='description'>{ reward.description }</div>

        <div className='delivery'><span>ESTIMATED DELIVERY</span><br></br>{ reward.delivery_date }</div>
        <div className='backers'><span>{ reward.backers } backers</span></div>

        <div className='reward-divider'>-----------------------------------------------------------------</div>

        <div className='pledge-box'>
          <span>PLEDGE AMOUNT</span>
          <div className='currency'>
            <i>$</i>
            <input type='text' value={ this.state.amount } onChange={ this.changeAmount.bind(this) } className={ box }></input>
          </div>
        </div>

        <button className='backer-button' onClick={ this.createContribution.bind(this) }>Continue</button>
      </section>
    );
  }
}

export default withRouter(Reward);
