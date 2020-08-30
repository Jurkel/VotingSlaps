import React from 'react'
import './VotingInfo.css'

function VotingInfo(props) {
  return (
    <div className='VotingInfo'>
      <div className='info-left'>
        <h1>{props.state} General Election</h1>
        <h2>{props.generalDate}</h2>
        <h3>Early Voting: Deadline - {props.earlyVoting} days before Election Day</h3>
        <h3>In-Person Absentee Voting: {props.absenteeVoting}</h3>
        <hr />
        <h2>In Person Voter Registration Deadline</h2>
        <h3>{props.registrationDeadlineInPerson} days before Election Day</h3>
        <h2>Online Voter Registration Deadline</h2>
        <h3>{props.registrationDeadlineOnline} days before Election Day</h3>
        <h2>Mail In Voter Registration Deadline</h2>
        <h3>{props.registrationDeadlineMail} days before Election Day</h3>
      </div>
        <hr />
      <div className='info-right'>
        <h3>Deadline to Request an Absentee Ballot Online:</h3>
        <h4>{props.absenteeRequestDeadlineOnline} days before Election Day</h4>
        <h3>Deadline to Request an Absentee Ballot In Person:</h3>
        <h4>{props.absenteeRequestDeadlineInPerson} days before Election Day</h4>
        <h3>Deadline to Request an Absentee Ballot By Mail:</h3>
        <h4>{props.absenteeRequestDeadlineMail} days before Election Day</h4>
        <h3>Deadline to Return Completed Absentee Ballot:</h3>
        <h4>{props.absenteeReturnDeadline}</h4>
      </div>
    </div>
  )
}

export default VotingInfo