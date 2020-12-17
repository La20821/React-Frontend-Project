import './App.css';
import React, {Component, useState} from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom'
import Items from '../Items/Items';
import Profile from '../Profile/Profile';
import HomePage from '../Homepage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const backUrl = 'http://localhost:3000/api'
// const [state, setState] = useState(initialState)

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      items: []
    }
    console.log(this.props)
    console.log(this.state)
  }
  
  componentDidMount = () => { 
    this.getItems()
  }

  getItems = async () => {
    const response = await axios(`${backUrl}/:id/items`)

    this.setState({
      items: response.data.allItems
    })
  }

  

  addItems = async (event) => {
    event.preventDefault()

    await axios.post(`${backUrl}/:id/items`, {
      type: event.target.type.value
    })

    this.getItems()
  }


  deleteItem = async(event) => {
    let itemId = event.target.div

    await axios.delete(`${backUrl}/:id/${itemId}`)

    this.getItems()
  }



  render () {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <nav>
          
        </nav>
        <main>
          <Route
          exact
          path="/"
          component={() => <HomePage/>}
          />
          <Route 
          exact
          path="/Login"
          component={()=> <Login/>}
          />
          <Route 
          exact
          path="/SignUp"
          component={()=> <SignUp/>}
          />
          <Route
          exact
          path="/Profile"
          component={() => <Profile/>}
          />
          <Route
          exact
          path="/items"
          component={() => <Items items={this.state.items}
          addItems={this.addItems}
          deleteItem={this.deleteItem}
          
          />}
          />
        </main>
        <div className='Footer'>
          <Footer/>

        </div>
      </div>
      
    );
  }

  }

export default App;
