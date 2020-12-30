import React from 'react';
import {useSelector} from 'react-redux';



const CartCounter = () => {

    const cart = useSelector(state => state.cart)

    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {cart.cart.length}</button>
            </li>
        </div>
    );
}

export default CartCounter;