import React from 'react';
import CourseCard from './CourseCard';
import Layout from '../Layout/Layout';
import useHook from '../Custom Hooks/useHook';

// Context API
// import CourseContext from '../ContextAPI/Context/CoursesContext';


const CourseGrid = () => {

    // Obtener el state si un proyecto esta activo
    // const courseContext = useContext(CourseContext);
    // const {courses} = courseContext;
    // console.info(courses)

    const categoria = useHook(); 

    return (
        <Layout>
            <h1 className="s-center s-pt-4">Listado de Cursos</h1>
            <div className="ed-grid m-grid-2 l-grid-3 xl-grid-4 l-big-section s-pt-4">
                {categoria.map(curso => (
                    <CourseCard
                        key={curso.id}
                        curso={curso}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default CourseGrid;