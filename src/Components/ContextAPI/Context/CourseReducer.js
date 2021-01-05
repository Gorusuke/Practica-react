import {GET_COURSES} from '../Types/index'


export default (state, action) => {
    switch (action.type) {
        case GET_COURSES:
            console.info(action)
            // return{
            //     ...state,
            //     courses: action.payload
            // }
        default:
            return state;
    }
}