import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Formulario from './Components/Pages/Formulario.jsx';
import Curso from './Components/Pages/Curso.jsx';
import CourseGrid from './Components/Pages/CourseGrid.jsx';
import Error404 from './Components/Pages/Error404.jsx';
// import './styles/styles.scss';
// import './app.css';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Formulario}/>
        <Route exact path="/pagina-cursos/:id" component={Curso}/>
        <Route exact path="/pagina-cursos" component={CourseGrid}/>
        <Route component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
