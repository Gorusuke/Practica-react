import React from 'react';
import {useDispatch} from 'react-redux';

// Redux
import {addToCart} from '../../Redux/actions/actionCreator'

const CartCounter = (props) => {


    const dispatch = useDispatch()

    const agregarAlCarrito = () => dispatch(addToCart)

    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {props.cartLength.length}</button>
            </li>
        </div>
    );
}

export default CartCounter;