import React, {Component} from "react";
import Item from "./Item";

class Cart extends Component{

    state = {
        cartItems: []
    };

    displayAddedItems = () => {
        const {addedItems} = this.props;
        return addedItems.map(item => {
            return(
                <div>
                    <Item item={item} />
                </div>
            );
        });
    };
            
    render(){
        const loggedIn = localStorage.getItem("token");
        return(
            <div className="cart">
                <h2>Shopping Cart</h2>
                {loggedIn
                    ? this.displayAddedItems()
                    : <h3>Please login or signup to view the Cart.</h3>
                }
            </div>
        );
    };

}

export default Cart;