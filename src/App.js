import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PaginaCursos from './PaginaCursos.jsx';
import Formulario from './Formulario.jsx';
import Error404 from './Error404.jsx';
// import './styles/styles.scss';
// import './app.css';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Formulario}/>
        <Route exact path="/pagina-cursos" component={PaginaCursos}/>
        <Route component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
