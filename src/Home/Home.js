import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Dropdown from '../Dropdown/Dropdown'
import VotingInfo from '../VotingInfo/VotingInfo'
import Footer from '../Footer/Footer'

function Home() {
  return (
    
    <div class='Home'>
      
      <header>
        <Nav />
      </header>
      <main>
        <Landing />
        <Dropdown />
        <VotingInfo />
      </main>
      <footer>
        <Footer />
      </footer>
        
    </div>
  )
}

export default Home