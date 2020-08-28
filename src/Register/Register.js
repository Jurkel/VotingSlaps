import React from 'react'
import { Form } from 'react-formio'
import './Register.css'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'));
const noAlertOption = { noAlerts: true };

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }
 

  isAbleToVote = (submission) => {
   // console.log('sub: ' + submission);
    let count = 0;
    for(const question in submission.data) {
        if(question === 'areYouAUSCitizen' && submission.data[question] === 'yes') {
            count++;
        } else if(question === 'areYou18YearsOldOnOrBeforeElectionDay' && submission.data[question] === 'yes') {
            count++;
        } else if(question === 'areYouIncarceratedInJailOrPrisonForAFelonyConviction' && submission.data[question] === 'no') {
            count++;
        } else if(question === 'doYouMeetYourStatesResidencyRequirement' && submission.data[question] === 'yes') {
            count++;
        } else if(question === 'haveYouBeenDeclaredIncompetentForVotingPurposesByAProbateCourt' && submission.data[question] === 'no') {
            count++;
        } else if(question === 'haveYouBeenPermanentlyDisenfranchisedForViolationsOfElectionLaws' && submission.data[question] === 'no') {
            count++;
        }
    }
    if(count === 6) {
        //console.log('open modal to say user is eligible to register to vote');
        return alert(`You're eligible to vote!`)
    } else {
        // console.log('open modal to say user is not eligible to register to vote');
        return alert(`You're not eligible to vote!`)
    }
  }

  isValid = (submission) => {
    if(submission.isValid) {
      return alert('submission valid');
    } else {
      return alert('submission not valid');
    }
  }

  render() {
    

    return (
      <div className='register-form'>
        <div className='register-banner'></div>
        <h2>Let's see if you can vote!</h2>
        <Form 
          options={noAlertOption}
          src="https://qshpuqquonmzkxm.form.io/votereligibility" 
          onSubmit={this.isAbleToVote} 
          onError={console.log}
          />
      </div>
    )
  }
  
}

export default Register