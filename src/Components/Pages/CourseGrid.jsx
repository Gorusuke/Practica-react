import React, {useEffect, useState} from 'react';
import CourseCard from './CourseCard';
import Layout from '../Layout/Layout'



const CourseGrid = () => {
    const [cursos, setCursos] = useState([])
    // console.info(cursos)


    const API = async () => {
        const informacion = await fetch('http://localhost:3000/cursos')
        const resultado = await informacion.json();
        setCursos(resultado);
    }

    useEffect(() => {
       API()
    }, []);  

    return (
        <Layout>
            <h1 className="s-center l-section s-pt-4">Listado de Cursos</h1>
            <div className="ed-grid m-grid-2 l-grid-3 xl-grid-4">
                {cursos.map(curso => (
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