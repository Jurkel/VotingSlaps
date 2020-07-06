import React from 'react'
import VotingInfo from '../VotingInfo/VotingInfo'
import './Dropdown.css'
import StateInfo from '../dummy-api'



class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '' 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { selected_state } = e.target
    this.setState({
      state: selected_state
    })
  }

  render() {
    
    
    return (
      <div className='Dropdown'>
        <h2 className='dropdown-text'>HOW TO VOTE IN YOUR STATE</h2>
        <label for='state'>Choose your state:</label>
        <form ref='form' onSubmit={this.handleSubmit}>
          <select name='states' id='states'>
            {StateInfo.map(state => 
              <option name='selected_state' value={state.state}>{state.state}</option>
            )}
          </select>
          <button type='button' className='search-button'>Search</button>
          <VotingInfo state={this.state.state}/>
        </form>
      </div>
    )
  }
}

export default Dropdown