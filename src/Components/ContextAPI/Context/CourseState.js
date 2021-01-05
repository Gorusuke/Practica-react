import React, {useReducer} from 'react';
import CourseReducer from './CourseReducer';
import CoursesContext from './CoursesContext';

import {GET_COURSES} from '../Types/index'

const CourseState = (props) => {

    const initialState = {
        courses: [],
        error: false
    }

    const [state, dispatch] = useReducer(CourseReducer, initialState)

    const GetCourses = async () => {       
        const informacion = await fetch(`http://localhost:3000/cursos`)
        const resultado = await informacion.json();
        dispatch({
            type: GET_COURSES,
            payload: resultado
        })
    }


    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                GetCourses
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );
}
 
export default CourseState;