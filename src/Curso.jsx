import React, {useEffect, useState} from 'react';
import Layout from './Components/Layout/Layout'


const Curso = (props) => {
    const {match} = props;

    const [curso, setCurso] = useState([]);

    const API = async (ID) => {
        const informacion = await fetch(`http://localhost:3000/cursos/${ID}`)
        const resultado = await informacion.json();
        setCurso(resultado);
    }

    useEffect(() => {
       API(match.params.id)
    }, []);


    return (
        <Layout>
            <div className="ed-grid ed-container">
                <div className="ed-item s-50 m-to-center">
                    <h1 className="s-center s-pt-4">{curso.title}</h1>
                    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl l-block">
                        <img src={curso.image} alt={curso.title}/>
                    </div>
                    <p className="m-grid-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore optio sapiente distinctio praesentium obcaecati maxime animi iste recusandae. Nam aliquam fuga illo doloremque, praesentium voluptatem quas alias temporibus molestias!</p>
                    <div className="s-main-center">
                        <button className="button--ghost-alert button--tiny s-mb-4">$ {curso.price}</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default Curso;