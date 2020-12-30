import React from 'react';
import {useSelector} from 'react-redux';



const CartCounter = () => {

    // Accede al state del store
    const cart = useSelector(state => state.carrito.cart)

    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {cart.length}</button>
            </li>
        </div>
    );
}

export default CartCounter;