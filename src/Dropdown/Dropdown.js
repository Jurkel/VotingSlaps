import React from 'react'
import VotingInfo from '../VotingInfo/VotingInfo'
import './Dropdown.css'
import StateInfo from '../dummy-api'



class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: '' 
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      selectedState: e.target.value
    })
  }

  render() {
    const selectedState = this.state.selectedState;
    
    return (
      <div className='Dropdown'>
        <h2 className='dropdown-text'>HOW TO VOTE IN YOUR STATE</h2>
        <label htmlFor='state'>Choose your state:</label>
        <form ref='form'>
          <select 
            className='dropdown-state' 
            name='states' id='states' 
            onChange={this.handleChange}
          >
            {StateInfo.map((state, index) => 
              <option 
                name='selected_state' 
                value={state.state}
                key={index}
              >
                {state.state}
              </option>
            )}
          </select>
          <VotingInfo state={selectedState}/>
        </form>
      </div>
    )
  }
}

export default Dropdown