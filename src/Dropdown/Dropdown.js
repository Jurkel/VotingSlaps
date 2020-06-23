import React from 'react'
import './Dropdown.css'

function Dropdown() {
  return (
    <div class='Dropdown'>
      <h2 class='dropdown-text'>HOW TO VOTE IN YOUR STATE</h2>
      <label for='state'>Choose your state:</label>
      <select name='states' id='states'>
        <option value='Ohio'>Ohio</option>
        <option value='Montana'>Montana</option>
        <option value='Alabama'>Alabama</option>
        <option value='Kentucky'>Kentucky</option>
        <option value='Indiana'>Indiana</option>
      </select>
      <button type='button' class='search-button'>Search</button>
    </div>
  )
}

export default Dropdown