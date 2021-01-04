import {combineReducers} from 'redux';
import rootReducer from './rootReducer';
import getCoursesReducer from './getCoursesReducer'


export default combineReducers({
    carrito: rootReducer,
    cursos: getCoursesReducer
});