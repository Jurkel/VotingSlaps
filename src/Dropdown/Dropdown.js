import React from 'react'
import VotingInfo from '../VotingInfo/VotingInfo'
import './Dropdown.css'
import { API_ENDPOINT } from '../config'



class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateInfo: [],
      id: ''
    }
  }

  componentDidMount() {
    fetch(`${API_ENDPOINT}/registration`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          stateInfo: data
        })
      })
      
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      id: e.target.value
    })
  }

  renderVotingInfo = (id) => {

    console.log(this.state.id);

    let stateSelected;
    let stateId = this.state.id;
    let regInfo = this.state.stateInfo

    regInfo.forEach(function(item) {
      if(item.id == stateId) {

        stateSelected = <VotingInfo 
          key={item.id}
          state={item.statefull}
          generalDate={item.generalvoting}
          earlyVoting={item.earlyvoting}
          absenteeVoting={item.absenteevoting}
          registrationDeadlineOnline={item.registrationdeadlineonline}
          registrationDeadlineInPerson={item.registrationdeadlineinperson}
          registrationDeadlineMail={item.registrationdeadlinemail}
          absenteeRequestDeadlineOnline={item.absenteerequestdeadlineonline}
          absenteeRequestDeadlineInPerson={item.absenteerequestdeadlineinperson}
          absenteeRequestDeadlineMail={item.absenteerequestdeadlinemail}
          absenteeReturnDeadline={item.absenteereturndeadline}
        />
      }
    })
    return stateSelected;
  }

  render() {

    

    const { id } = this.state.id
    const regInfo  = this.state.stateInfo

    return (

      <div className='Dropdown'>
        <h2 className='dropdown-text'>HOW TO VOTE IN YOUR STATE</h2>
        <label htmlFor='state'>Choose your state:</label>
        <form ref='form'>
          <select 
            className='dropdown-state' 
            name='states' 
            id='states' 
            onChange={this.handleChange}
          >
            {regInfo.map((state, index) => 
              <option 
                name='selected_state' 
                value={state.id}
                key={index}
              >
                {state.statefull}
              </option>
            )}
          </select>
          {this.renderVotingInfo(id)}
        </form>
      </div>
    )
  }
}

export default Dropdown