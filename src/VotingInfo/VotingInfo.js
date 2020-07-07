import React from 'react'
import './VotingInfo.css'

function VotingInfo(props) {
  return (
    <div className='VotingInfo'>
      <h2>{props.state} General Election</h2>
      <h2>{props.generalDate}</h2>
      <h3>Early Voting: {props.earlyVoting}</h3>
      <h3>In-Person Absentee Voting: {props.absenteeVoting}</h3>
      <hr />
      <h2>Voter Registration Deadline</h2>
      <h3>{props.registrationDeadline}</h3>
      <hr />
      <h3>Deadline to Request an Absentee Ballot:</h3>
      <h4>{props.absenteeRequestDeadline}</h4>
      <h3>Deadline to Return Completed Absentee Ballot:</h3>
      <h4>{props.absenteeReturnDeadline}</h4>
    </div>
  )
}

export default VotingInfo