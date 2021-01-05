import React from 'react';
import {connect} from 'react-redux';

const CartCounter = (props) => {
    return (
        <div>
            <li>
                <button className="button tiny ghost"><i className="fas fa-shopping-cart"></i> {props.cartLength.length}</button>
            </li>
        </div>
    );
}

const mapStateToProps = (state) => (
    {
        cartLength: state.cart
    }
    
)
 
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);