import React from 'react'
import './Dropdown.css'
import StateInfo from '../dummy-api'

function Dropdown() {
  return (
    <div class='Dropdown'>
      <h2 class='dropdown-text'>HOW TO VOTE IN YOUR STATE</h2>
      <label for='state'>Choose your state:</label>
      <select name='states' id='states'>
        {StateInfo.map(state => 
          <option value={state.state}>{state.state}</option>
        )}
      </select>
      <button type='button' class='search-button'>Search</button>
    </div>
  )
}

export default Dropdown