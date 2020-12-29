import React from 'react';
import Layout from '../Layout/Layout'
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <Layout>
            <div class="main-banner img-container" id="main-banner">
                <div class="ed-grid lg-grid-6">
                    <div class="lg-cols-4 lg-x-2">
                        <img class="main-banner__img" src="tu-imagen.jpg" alt='imagen'/>
                        <div class="main-banner__data s-center">
                            <p class="t2 s-mb-0">Bienvenidos a la pagina de practica</p>
                            <p> Aqui encontraras todo lo relacionado a react</p>
                            <Link to='/pagina-cursos' className="button ghost light-color">ir a cursos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default Home;