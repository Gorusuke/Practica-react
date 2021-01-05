import React, {useReducer} from 'react';
import CourseReducer from './CourseReducer';
import CoursesContext from './CoursesContext';

import {GET_COURSES} from '../Types/index'

const CourseState = (props) => {

    const initialState = {
        courses: [
            // {
            //     id: 1,
            //     title: "Desarrollo web",
            //     image: "https://edteam-media.s3.amazonaws.com/courses/original/e7fbb7f9-773c-426a-bbb5-14276a37af33.png",
            //     price: "20 USD",
            //     teacher: "Jose Garcia",
            //     avatar: "https://avatars2.githubusercontent.com/u/64686153?s=460&u=a2e89860c31b8e0cf9af8fc919a97f175e49f8a2&v=4"
            // },
            // {
            //     id: 2,
            //     title: "Programación con Go",
            //     image: "https://edteam-media.s3.amazonaws.com/courses/big/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
            //     price: "35 USD",
            //     teacher: "Juan Perez",
            //     avatar: "https://randomuser.me/api/portraits/men/54.jpg"
            // }
        ],
        error: false
    }

    const [state, dispatch] = useReducer(CourseReducer, initialState)

    // Consulta a la fake api
    const GetCourses = async () => {       
        // const informacion = await fetch(`http://localhost:3000/cursos`)
        // const resultado = await informacion.json();
        // dispatch({
        //     type: GET_COURSES,
        //     payload: resultado
        // })
        fetch(`http://localhost:3000/cursos`)
        .then(result => result.json())
        .then(res => {
            return dispatch({
                type: GET_COURSES,
                payload: res
            })
        })
    }


    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                // GetCourses
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    )
}
 
export default CourseState;