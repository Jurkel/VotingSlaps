import React from 'react'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Dropdown from '../Dropdown/Dropdown'
import VotingInfo from '../VotingInfo/VotingInfo'
import Footer from '../Footer/Footer'
// import App from '../App/App'
// import GetInformed from '../Get-Informed/Get-Informed'
// import HowToVote from '../How-To-Vote/How-To-Vote'
// import Register from '../Register/Register'

function Home() {
  return (
    
    <div class='Home'>
        <Nav />
        <Landing />
        <Dropdown />
        <VotingInfo />
        <Footer />

        {/* <Switch>
          <Route exact path='/' component={App} />
          <Route path='/get-informed' component={GetInformed} />
          <Route path='/how-to-vote' component={HowToVote} />
          <Route path='/register' component={Register} />
        </Switch> */}
        
      
    </div>
  )
}

export default Home