import { ADD_TO_CART, REMOVE_TO_CART, GET_COURSES } from "../types";

export function addToCart(id){
    return {    
        type: ADD_TO_CART,
        payload: id
    }
};

export function removeToCart(id){
    return {    
        type: REMOVE_TO_CART,
        payload: id
    }
}

export function getCourses(){
    return async (dispatch) => {
        const respuesta = await fetch(`http://localhost:3000/cursos`);
        const resultado = await respuesta.json();
        return dispatch({
            type: GET_COURSES,
            payload: resultado
        })
        // .then(response => response.json())
        // .then(res => {
        //     return dispatch({
        //         type: GET_COURSES,
        //         payload: res
        //     })
        // })
    }
}