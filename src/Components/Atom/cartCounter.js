import React, {useContext} from 'react';


// Context API
import CartContext from '../ContextAPI/Context/CartContext';

const CartCounter = () => {

    // Obtener el state si un proyecto esta activo
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;

    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {cart.length}</button>
            </li>
        </div>
    );
}


export default CartCounter;