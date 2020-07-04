import React from 'react'
// import { Route } from 'react-router-dom'
// import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Dropdown from '../Dropdown/Dropdown'
import VotingInfo from '../VotingInfo/VotingInfo'
// import Footer from '../Footer/Footer'

function Home() {
  return (
    
    <div class='Home'>
      <main>
        <Landing />
        <Dropdown />
        <VotingInfo />
      </main>
      
    </div>
  )
}

export default Home