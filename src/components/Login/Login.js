import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const backUrl = 'http://localhost:3000/api'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
       
    }


    handleLogin = async (event) => {
        console.log("Logging In")
        event.preventDefault();
        let response = await axios.post(`${backUrl}/auth/login`, {
            username: event.target.username.value,
            password: event.target.password.value
      
          })
        console.log("post request")
        
        this.props.findUser(response.data.userId)
        setTimeout(() => {
            this.props.history.push("/items")
        }, 500)
        // this.props.history.push("/items")
        console.log(this.props)
    }

        
    render() {
        console.log(this.props)
        return(
            
            <div>
                
                <h1 id="login">Styler Log In</h1>
                <p></p>
                <form onSubmit ={this.handleLogin} method="POST">
                    <div>
                        Username: <input type="text" name="username" /><br/>
                        Password: <input type="text" name="password" /><br/>

                        {/* <Link to="/Items">
                            <input type="submit" name="Log In" value="Login"/></Link> */}
                            <button type ="submit" class='btn'>Log In </button>
                    </div>




                </form>

                
               
            </div>
        )
    }
}

export default Login;