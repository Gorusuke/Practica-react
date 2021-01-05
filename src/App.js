import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Formulario from './Components/Pages/Formulario.jsx';
import Home from './Components/Pages/Home.jsx';
import Curso from './Components/Pages/Curso.jsx';
import CourseGrid from './Components/Pages/CourseGrid.jsx';
import Error404 from './Components/Pages/Error404.jsx';

// Context API
import CourseState from './Components/ContextAPI/Context/CourseState';


function App() {

  return (
    <CourseState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pagina-cursos/:id" component={Curso}/>
          <Route exact path="/pagina-cursos" component={CourseGrid}/>
          <Route exact path="/formulario" component={Formulario}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </CourseState>   
  );
}

export default App;
