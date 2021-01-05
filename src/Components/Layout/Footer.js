import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from './logo2.png'
import '../../app.css'


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-start footer-links">
                    <nav className="main-menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/pagina-cursos">Cursos</NavLink></li>
                            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                            <li><NavLink to="/formulario">Formulario</NavLink></li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l"></div>
                </div>
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <Link to="/">
                        <img src={logo} className="main-logo" alt="imagen"/>
                    </Link>
                </div>                
            </div>
        </footer>
    );
}
 
export default Footer;