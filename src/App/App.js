import React, { Component } from 'react'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import { Route } from 'react-router-dom'
import './App.css'
import Footer from '../Footer/Footer'
import GetInformed from '../Get-Informed/Get-Informed'
import HowToVote from '../How-To-Vote/How-To-Vote'
import Register from '../Register/Register'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <Nav />
          </header>
          <main>
            {/* <Home /> */}
            <Route exact path='/' component={Home} />
            <Route path='/get-informed' component={GetInformed} /> 
            <Route path='/how-to-vote' component={HowToVote} />
            <Route path='/register' component={Register} />
          </main>
          <footer>
            <Footer />
          </footer>
          
        </div>
    );
  }
  
}

export default App
