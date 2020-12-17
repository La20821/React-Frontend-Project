import React, {Component} from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';


class HomePage extends Component {
    constructor() {
        super()

        
    }
    render () {
        return (
            <div>

                <h1>Where Creativity Meets Your Closet</h1>
                {/* <a href='/Login' class = "button">Log In</a><br/>  */}
                 <Link to ='/Login' class="button">Log In</Link><br/> 
                
                
                <Link to = '/SignUp' class="button">Create Your My Closet Account</Link>

            </div>
        )
    }
}

export default HomePage;