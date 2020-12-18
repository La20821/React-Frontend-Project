import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Items.css';

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
                    <Link className ="linkstyle" to = {`/items/${items.id}`}>
                        <h3 id = "itmdisplay">{items.type}{items.color}{items.size}</h3>
                        </Link>
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
                <h1 id="itmtitle">Start Styling!</h1>
                <h2> My Closet</h2>
                <form onSubmit={this.handleItem}>
                    <h3>{this.props.addItem}</h3>
                
                   Type of Clothing <input type="text" name="type"/>
                   Color: <input type="text" name="color"/>
                   Size: <input type="value" name="size"/><br/>
                   <button type="submit" class="itmbtn">Add to Closet</button>
                </form>
                {allItems}
                {this.props.addItem}
                
        

            </div>
        )
    }
}

export default Items;