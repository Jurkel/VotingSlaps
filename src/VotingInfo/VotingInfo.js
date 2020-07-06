import React from 'react'
import './VotingInfo.css'

function VotingInfo(props) {
  return (
    <div className='VotingInfo'>
      <p>{props.children}</p>
    </div>
  )
}

export default VotingInfo