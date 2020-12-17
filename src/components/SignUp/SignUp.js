import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';


class SignUp extends Component {
    render() {
        return(
            <div>
                <form action method="POST">
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


                    </select>
                    <Link to="/Items"><input type="submit" name="Log In" value="Login"/></Link>

                    


                </form>



            </div>
        )
    }
}

export default SignUp;