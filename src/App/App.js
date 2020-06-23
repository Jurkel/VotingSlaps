import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Dropdown from '../Dropdown/Dropdown'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Dropdown />
      </div>
    );
  }
  
}

export default App
