import { GET_COURSES } from "../types";


let initialStore = {
    courses: []
}

export default function(state = initialStore, action){
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        default:
            return state;
    }
}