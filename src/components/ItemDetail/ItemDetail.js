import React, {Component} from 'react';
import './ItemDetail.css';

class ItemDetail extends Component {
    render () {
        const itemDetail = this.props.items.find //not working. item detail name not being pulled in
        (item => {
            return item.id == this.props.match.params.id
        }) 


        return(
            <div>
                <h1>{itemDetail.name}</h1>
                <h3 id="dtltitle"> Edit Item</h3>
                <form onSubmit={this.props.editItem}>
                    <input type="hidden" name="itemId"  value={itemDetail.id}/>
                    <input type="text" name="name" placeholder={itemDetail.name}/>
                    <button type="submit" class="itmeditbtn">Edit Item</button>
                </form>
            </div>
        )
    }
}

export default ItemDetail;