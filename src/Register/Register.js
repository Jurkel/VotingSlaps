import React from 'react'
import { Form } from 'react-formio'
import './Register.css'

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  // isAbleToVote = (submission) => {
  //   let count = 0;
  //   for(const question in submission.data) {
  //       if(question === 'areYouAUSCitizen' && submission.data[question] === 'yes') {
  //           count++;
  //       } else if(question === 'areYou18YearsOldOnOrBeforeElectionDay' && submission.data[question] === 'yes') {
  //           count++;
  //       } else if(question === 'areYouIncarceratedInJailOrPrisonForAFelonyConviction' && submission.data[question] === 'no') {
  //           count++;
  //       } else if(question === 'doYouMeetYourStatesResidencyRequirement' && submission.data[question] === 'yes') {
  //           count++;
  //       } else if(question === 'haveYouBeenDeclaredIncompetentForVotingPurposesByAProbateCourt' && submission.data[question] === 'no') {
  //           count++;
  //       } else if(question === 'haveYouBeenPermanentlyDisenfranchisedForViolationsOfElectionLaws' && submission.data[question] === 'no') {
  //           count++;
  //       }
  //   }
  //   if(count === 6) {
  //       console.log('open modal to say user is eligible to register to vote');
  //       this.setState({
  //         message: 'open modal to say user is eligible to register to vote'
  //       })
  //       return true;
  //   } else {
  //       console.log('open modal to say user is not eligible to register to vote');
  //       this.setState({
  //         message: 'open modal to say user is not eligible to register to vote'
  //       })
  //       return false;
  //   }
  // }
  render() {
    return (
      <div className='register-form'>
        <div className='register-banner'></div>
        <h2>Let's see if you can vote!</h2>
        <Form src="https://qshpuqquonmzkxm.form.io/votereligibility"/>
      </div>
    )
  }
  
}



export default Register