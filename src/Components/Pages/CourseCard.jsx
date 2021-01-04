import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

// Redux
import { addToCart, removeToCart } from '../../Redux/actions/actionCreator';

const CourseCard = (props) => {

    const {title, image, price, teacher, avatar, id} = props.curso;

    // Accede al state del store
    const cart = useSelector(state => state.carrito.cart)

    // Redux
    // utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar a llamar el action de addToCart
    const agregarAlCarrito = (id) => dispatch(addToCart(id))
    const eliminarDelCarrito = (id) => dispatch(removeToCart(id))


    return (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/pagina-cursos/${id}`}>
                    <img src={image} alt={title}/>
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">{title}</h3>
                <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src={avatar} alt={teacher}/>
                    </div>
                    </div>
                        <span className="small">{teacher}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    { cart.find(a => a === id)
                        ? <button 
                            className="button--ghost-alert button--tiny"
                            onClick={() => eliminarDelCarrito(id)}
                        ><i className="fas fa-check"></i></button>
                        : <button 
                            className="button--ghost-alert button--tiny"
                            onClick={() => agregarAlCarrito(id)}
                        >${price}</button>
                    }
                    
                   
                    
                </div>
            </div>
        </article>
    );
}

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

CourseCard.defaultProps = {
    title: 'No se encontro titulo',
    image: 'no hay imagen',
    price: '--',
    teacher: 'no hay profesor',
    avatar:''
}

// const mapStateToProps = (state) => ({
//     cart: state.cart
// })
 
// const mapDispatchToProps = (dispatch) => ({
//     addToCart(id) {
//         dispatch(addToCart(id))
//     }
// })
 
export default CourseCard;