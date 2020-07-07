import React from 'react'
import VotingInfo from '../VotingInfo/VotingInfo'
import './Dropdown.css'
import StateInfo from '../dummy-api'



class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateInfo: [],
      id: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      id: e.target.value
    })
  }

  renderVotingInfo = (id) => {
    const { stateInfo } = this.state;
    return stateInfo.map((item, id) => 
      <VotingInfo 
        key={id}
        state={item.state}
        generalDate={item.generalDate}
        earlyVoting={item.earlyVoting}
        absenteeVoting={item.absenteeVoting}
        registrationDeadline={item.registrationDeadline}
        absenteeRequestDeadline={item.absenteeRequestDeadline}
        absenteeReturnDeadline={item.absenteeReturnDeadline}
      />
    )
  }

  render() {
    
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
                value={state.id}
                key={index}
              >
                {state.state}
              </option>

            )}
          </select>
          {this.renderVotingInfo()}
        </form>
      </div>
    )
  }
}

export default Dropdown