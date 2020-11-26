import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <Link to="/">
                        <img src='https://motorradco.vteximg.com.br/arquivos/ids/155829-1280-840/R-1250-GS-ADVENTURE-BLANCO-AZUL-ROJO.jpg?v=637357326221570000
                        ' className="main-logo" alt="No hay imagen"/>
                    </Link>
                </div>
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                    <nav className="main-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pagina-cursos">Cursos</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l"></div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;