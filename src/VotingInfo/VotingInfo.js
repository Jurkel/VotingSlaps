import React from 'react'
import './VotingInfo.css'
// import StateInfo from '../dummy-api'

function VotingInfo(props) {
  return (
    <div className='VotingInfo'>
      <p>{props.state}</p>
    </div>
  )
}

export default VotingInfo