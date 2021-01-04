import { ADD_TO_CART, REMOVE_TO_CART } from "../types";


let initialStore = {
    cart: []
}

export default function(state = initialStore, action){
    switch (action.type) {
        case ADD_TO_CART:
            if(state.cart.find(a => a === action.payload)) return state
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter(a => a !== action.payload)
            }   
        default:
            return state;
    }
}