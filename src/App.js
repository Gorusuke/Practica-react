import React, {useState} from 'react';
import './styles/styles.scss';
import Card from './Card.jsx'



function App() {

  const [contador, setContador] = useState(0)

  const contar = () => {
    setContador(contador + 1)
  }

  const cursos = [
    {
      title: "Desarrollo web",
      image: "https://edteam-media.s3.amazonaws.com/courses/original/e7fbb7f9-773c-426a-bbb5-14276a37af33.png",
      price: "20 USD",
      teacher: "Jose Garcia",
      avatar: "https://avatars2.githubusercontent.com/u/64686153?s=460&u=a2e89860c31b8e0cf9af8fc919a97f175e49f8a2&v=4"
    },
    {
      title: "Programación con Go",
      image: "https://edteam-media.s3.amazonaws.com/courses/medium/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
      price: "35 USD",
      teacher: "Juan Perez",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      title: "Librerias de Javascript",
      image: "https://edteam-media.s3.amazonaws.com/courses/small/e8207ec4-e9a7-4cba-86a8-ee80c443a37f.jpg",
      price: "25 USD",
      teacher: "Joseph washintong",
      avatar: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
      title: "React desde cero",
      image: "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      price: "35 USD",
      teacher: "Sofia Lopez",
      avatar: "https://randomuser.me/api/portraits/women/38.jpg"
    }
  ]

  return (
    <div className="App s-center">
      <h2 className="t1 biggest">{contador}</h2>
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
      <button className="button l-section" onClick={() => contar()} >Contar</button>

      <div className="ed-grid m-grid-4 s-grid-2 l-section">
        {cursos.map(curso => (
          <Card
            key = {curso.title}
            curso = {curso}
          />  
        ))}
        
        {/* <Card 
          cursos = {cursos[0]}
        />   
        <Card 
          cursos = {cursos[1]}
        />      
        <Card 
          cursos = {cursos[2]}
        />
        <Card 
          cursos = {cursos[3]}
        />   */}
      </div> 
      
    </div>
  );
}

export default App;
