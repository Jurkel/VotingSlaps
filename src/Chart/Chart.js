import React from 'react'
import chart from '../Resources/Age-Chart.png'
import './Chart.css'

class Chart extends React.Component {
  
  render() {
    return (
      <div className='chart-container'>
        <h2>Turnout By Age</h2>
        <img className='chart' src={chart} alt='turnout-by-age' />
      </div>
    )
  }
  
}

export default Chart