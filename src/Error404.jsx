import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';
import './styles/styles.scss';




const Error404 = () => (
    <div className="pagina_contenedor">
        <h1>La pagina que buscas no existe</h1>
        <p>La Pagina no fue encontrada</p>
        <section className="error_container">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
        </section>
        <div className="link_container">
            <Link to="/" className="button">Volver al Inicio</Link>
        </div>
    </div>
);

 
export default Error404;