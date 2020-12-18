import Axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const backUrl = 'http://localhost:3000/api'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

handleSignup = async (event) => {
    event.preventDefault();
    let responses = await axios.post(`${backUrl}/auth/signup`, {
        name: event.target.name.value,
        username: event.target.username.value,
        password: event.target.password.password
    })

    this.props.signupUser(responses.data.userId)
    this.props.history.push('/')
}




    render() {
        return(
            <div>
                <h1 id="signup"> First, we'll need a little information. </h1>
                <form onSubmit = {this.handleSignup} method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Username: <input type="text" name="username" /><br/>
                    Password: <input type="text" name="password"/><br/>
                    Whats your go-to style?: <select id = "styleList">
                                        <option value = "1">Urban</option>
                                        <option value = "2">Hippie</option>
                                        <option value = "3">Chic</option>
                                        <option value = "4">Business</option>
                                        <option value = "5">Formal</option>
                                        <option value = "6">Casual</option>


                    </select><br/>
                    {/* //<Link to="/Items"><input type="submit" name="Log In" value="Login"/></Link> */}
                    <Link to="/Items" class="button">Let's Build My Closet</Link>

                    


                </form>



            </div>
        )
    }
}

export default SignUp;