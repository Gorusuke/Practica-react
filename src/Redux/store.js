import {createStore} from 'redux';

let initialStore = {
    cart: []
}


const rootReducer = (state = initialStore, action) => {
    console.info(action.cart)
    if(action.type === 'ADD_TO_CART'){

        if(state.cart.find(a => a === action.payload)) return state

        return {
            ...state,
            cart: state.cart.concat(action.payload)
        }
    }

    return state
}

export default createStore(rootReducer)