import React, {Component} from 'react';

class ItemDetail extends Component {
    render () {
        const itemDetail = this.props.items.find
        (item => {
            return item.id == this.props.match.params.id
        }) 


        return(
            <div>
                <h1>{itemDetail.name}</h1>
            </div>
        )
    }
}

export default ItemDetail;