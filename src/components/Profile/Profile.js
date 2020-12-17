import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super()

        this.state = {
            searchProfile: '',
        }
    }

    searchProfile = (event) => {
        this.setState({
            searchProfile: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Profile Page</h1>

            </div>
        )
    }
}

export default Profile;