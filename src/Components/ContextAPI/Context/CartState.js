import React, {useReducer} from 'react';
import CourseReducer from './CartReducer';
import CoursesContext from './CartContext';

import {ADD_TO_CART, REMOVE_TO_CART} from '../Types/index'

const CourseState = (props) => {

    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(CourseReducer, initialState)


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
        <CoursesContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removeToCart
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    )
}
 
export default CourseState;