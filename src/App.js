import React from 'react';
import './styles/styles.scss';
import './app.css'
import Card from './Card.jsx'
import Formulario from './Formulario.jsx'



function App() {

  return (
    <div className="App s-center">
      <form>
        <div className="ed-container">
          <div className="ed-item form__item l-60">
            <label className="s-left" htmlFor="nombre">Nombre</label>
            <input type="text"  id="nombre"/>
          </div>

          <div className="ed-item form__item l-40">
            <label className="s-left" htmlFor="nombre">Apellido</label>
            <input type="text"  id="nombre"/>
          </div>
        </div>
      </form>     
      <Formulario />
    </div>
  );
}

export default App;
