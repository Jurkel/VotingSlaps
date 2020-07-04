import React, { Component } from 'react'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import { Route, Switch } from 'react-router-dom'
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
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/get-informed'>
                <GetInformed />  
              </Route> 
              <Route path='/how-to-vote'>
                <HowToVote />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
          
        </div>
    );
  }
  
}

export default App
