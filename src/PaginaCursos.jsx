import React, {useEffect, useState} from 'react';
import Card from './Card';
import Layout from './Components/Layout/Layout'



const PaginaCursos = () => {
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
            <h1 className="s-center l-section">Listado de Cursos</h1>
            <div className="ed-grid m-grid-2 l-grid-3 xl-grid-4">
                {cursos.map(curso => (
                    <Card 
                        key={curso.id}
                        curso={curso}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default PaginaCursos;