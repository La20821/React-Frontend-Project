import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Items extends Component {


    handleItem = (event) => {
        event.preventDefault();
        this.props.addItems(event)
        // this.props.history.push("/items")
        console.log(this.props)
    }


    render() {

        console.log(this.props)
    
        const allItems = this.props.items.map(items => {
            return (
                <li key={items.id}>
                    <Link to = {`/items/${items.id}`}>
                        {items.type}</Link>
                        <button
                            key={items.id}
                            id={items.id}
                            onClick={this.props.deleteItems}>
                                Delete
                        </button>
                </li>
            )
        })
        
        return (
            <div>
                <h1>Welcome back Stylist,  </h1>
                <h2> All the Items</h2>
                <form onSubmit={this.handleItem}>
                    <h3>{this.props.addItem}</h3>
                
                   Type of Clothing <input type="text" name="type"/>
                   Color: <input type="text" name="color"/>
                   Size: <input type="value" name="size"/>
                   <input type="submit" value="Add to Closet"/>
                </form>

            </div>
        )
    }
}

export default Items;