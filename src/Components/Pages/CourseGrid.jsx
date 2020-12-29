import React from 'react';
import CourseCard from './CourseCard';
import Layout from '../Layout/Layout';
import useHook from '../Custom Hooks/useHook';



const CourseGrid = () => {
    const categoria = useHook(); 

    return (
        <Layout>
            <h1 className="s-center l-section s-pt-4">Listado de Cursos</h1>
            <div className="ed-grid m-grid-2 l-grid-3 xl-grid-4 l-big-section">
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