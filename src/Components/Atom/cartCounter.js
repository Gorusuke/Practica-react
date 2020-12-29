import React from 'react';


const CartCounter = (props) => {

    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {props.cartLength.length}</button>
            </li>
        </div>
    );
}

export default CartCounter;