import React from 'react'
import './Get-Informed.css'

function GetInformed() {
  return (
    <React.Fragment>
      <div className='informed-banner'>
        Banner Image
      </div>
    
      <div className='informedStats'>
        <h2>Get Informed</h2>
        <ol>
          <li>The U.S. has the lowest voter turnout of almost any major country on Earth</li>
          <li>The youngest voter group always has the lowest turnout rate.</li>
          <li>Young people fail to vote because of structural issues with how elections are run and how poorly
            civics education is taught in America.
          </li>
          <li>Not only is the turnout rate for young people typically far lower than the turnout rate over all, it also historically lags that of other age groups.</li>
        </ol>
      </div>
    </React.Fragment>
  )
}

export default GetInformed