import React,{Component} from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div>
                <header className="header">
                    
                </header>
                <h1 id="header">Welcome to Your Digital Closet</h1>
            </div>
        )
    }
}

export default Header;