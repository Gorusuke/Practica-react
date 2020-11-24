import React from 'react';
import './styles/styles.scss';
import './app.css'
import Card from './Card.jsx'
import Formulario from './Formulario.jsx'



function App() {

  return (
    <>
    <div className="App">
      <form>
        <div className="ed-container">
          <div className="ed-item form__item l-60">
            <label className="s-left" htmlFor="nombre">Nombre</label>
            <input type="text"  id="nombre"/>
          </div>

          <div className="ed-item form__item l-40">
            <label className="s-left" htmlFor="apellido">Apellido</label>
            <input type="text"  id="apellido"/>
          </div>
        </div>
      </form>     
    </div>
    <Formulario />
    </>
  );
}

export default App;
