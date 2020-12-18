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
import ItemDetail from '../ItemDetail/ItemDetail'

const backUrl = 'http://localhost:3000/api'
// const [state, setState] = useState(initialState)

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      userId: null,
      items: [],
      user: {}
    }
    console.log(this.props)
    console.log(this.state)
  }
  
  componentDidMount = () => { 
    axios.get(`${backUrl}/items`)
    .then((response) => {
      this.setState({
        items: response.data.items
      })
    })
    
    //this.getItems()
  }

  // getItems = async () => {
  //   const response = await axios(`${backUrl}/items/`)

  //   this.setState({
  //     items: response.data.items
  //   })
  //  console.log(response) 
  // }
 
// Get User Profile Function
  //userProfile = async () => {
   // const response = await axios.get(`${backUrl}/users/profile/${this.props.params.user}`)
  //}
//  refreshPage = () => {
//     window.location.reload(false)
//   }

  
  

  addItems = async (event) => {
    event.preventDefault()

    console.log(event.target)
    let response = await axios.post(`${backUrl}/items/newitem`, {
      type: event.target.type.value,
      color: event.target.color.value,
      size: event.target.size.value

    })
    let data = response.data
    
    console.log(data)
    //this.userProfile()
    //this.refreshPage()
    this.setState({
      items: response.data.item
      
      
    })
    

    
    // this.findUser(this.state.user.id)
    //this.getItems()
  
   // console.log(items)
  
  }


  deleteItem = async(event) => {
    let itemId = event.target.div

    await axios.delete(`${backUrl}/:id/${itemId}`)

    this.findUser(this.state.user.id)
  }

  findUser = async (user) => {
    console.log("findUser")
    let res = await axios.get(`${backUrl}/users/profile/${user}`)
  
   this.setState({
      userId: user,
      user: res.data.user,
      items: res.data.user.Items
     
      // Msg :"User credentials accepted"
    }) 
  }


    signupUser = async (event) => {
      console.log("signupUser")
      let res2 = await axios.post(`${backUrl}/auth/profile/signup`, {
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value
    })

    this.findUser(event)
    }

    logoutUser = async (event) => {
      console.log("logoutUser")
      await axios.get(`${backUrl}/auth/logout`)

      this.setState({
        loggedIn:false,
        user:{}
      })
    }

    editItem = async(event) => {
      event.preventDefault()

      let itemId = event.target.itemId.value

      await axios.put(`${backUrl}/items/${itemId}`, {
        name: event.target.name.value,
        itemId: itemId
      })

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
          component={(routerProps)=> <Login
            {...routerProps} findUser ={(e) => this.findUser(e)} />}
          />
          <Route 
          exact
          path="/SignUp"
          component={(routerProps)=> <SignUp
          {...routerProps} signupUser= {(e) => this.signupUser(e)} />}
          />
          <Route
          exact
          path="/Profile"
          component={() => <Profile/>}
          />
          <Route
          exact
          path="/items"
          component={(routerProps) => <Items 
          {...routerProps} addItems ={(e) => this.addItems(e)}
          items={this.state.user.Items}
          deleteItem={this.deleteItem}
          
          />}
          />
          <Route
          exact
          path ="/items/:id"
          component={(routerProps) => <ItemDetail
          {...routerProps} editItem = {(e) => this.editItem(e)}
          items={this.state.user.Items}
          editItem={this.editItem}
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
