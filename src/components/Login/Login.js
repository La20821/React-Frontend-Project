import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         users: []
    //     }
    // }

    // findUser=(event) => {
    //     this.setState({
    //         users
    //     })
    // }


        

        



    render() {
        return(
            
            <div>
                <h1>Styler Log In</h1>
                <form action='' method="POST">
                    <div>
                        Username: <input type="text" name="username" /><br/>
                        Password: <input type="text" name="password" /><br/>

                        {/* <Link to="/Items">
                            <input type="submit" name="Log In" value="Login"/></Link> */}
                            <a href='/Items' class='btn'>Log In</a>
                    </div>




                </form>

                
               
            </div>
        )
    }
}

export default Login;