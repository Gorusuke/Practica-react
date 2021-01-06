import React, {useReducer} from 'react';
import CartReducer from './CartReducer';
import CartContext from './CartContext';

import {ADD_TO_CART, REMOVE_TO_CART} from '../Types/index'

const CartState = (props) => {

    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)


    // Añadir al carrito
    const addToCart = (id) => {
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
    }

    // Remover del carrito
    const removeToCart = (id) => {
        dispatch({
            type: REMOVE_TO_CART,
            payload: id
        })
    }
    


    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removeToCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
 
export default CartState;