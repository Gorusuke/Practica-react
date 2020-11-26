import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles/styles.scss';
import Layout from './Layout.js'

class Formulario extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            nombre: '',
            email: '',
            validacion: false,
            escribir: false
        }

        this.cambiarNombre = this.cambiarNombre.bind(this) 
    }

    // cambiarNombre = (e) => {
    //     this.setState({
    //     nombre: e.target.value
    // })} // ↑↑↑ esta es una forma (y lleva menos codigo)

    cambiarNombre(e) {
        this.setState({
        nombre: e.target.value
    })} // ↑↑↑ esta es otra Forma (esta necesita un proceso extra que esta en la linea 13 de este mismo codigo)


    cambiarEmail = (e) => {
        this.setState({
        email: e.target.value
    })} // ↑↑↑ esta es una forma (y lleva menos codigo)

    cambiarFormulario = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    } // Esta es otra opcion donde las 2 anteriores funciones las convertimos en una sola

    submitFormulario = (e) => {
        e.preventDefault();

        // Validar los campos
        if(this.state.nombre.trim() === '' ||this.state.email.trim() === ''){
           this.setState({
               validacion: true,
           });
           return;
        }

        // Eliminar el mensaje del IF
        this.setState({
            validacion: false
        });

        this.setState({
            escribir: true
        });

        // // Reiniciar el form
        // this.setState({
        //     nombre: '',
        //     email: ''
        // });
    }

    render(){

        // const [formulario, setFormulario] = useState({
        //     nombre: '',
        //     email: ''
        // });

        // const actualizarState = (e) => {
        //     setFormularioita({
        //         ...formulario,
        //         [e.target.name]: e.target.value
        //     })
        // }


        return (
            <Layout>
                <div className="ed-grid">
                    <h1 className="color red-500 s-center">Formulario</h1>
                    {this.state.validacion ? <p className="s-center color red-500">Todos Los Campos Son Obligatorios</p> : null}
                    <form
                        onSubmit={this.submitFormulario}
                    >
                        <div className="ed-container">
                            <div className="ed-item form__item s-100">
                                <label className="s-left" htmlFor="nombre">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    id="nombre"
                                    placeholder="Tu Nombre"
                                    name="nombre"
                                    onChange={this.cambiarFormulario}
                                    // onChange={this.cambiarNombre}
                                    value={this.state.nombre}
                                />
                            </div>
                            <div className="ed-item form__item s-100">
                                <label className="s-left" htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    placeholder="Tu email"
                                    name="email"
                                    onChange={this.cambiarFormulario}
                                    // onChange={this.cambiarEmail}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="ed-item s-center">
                                <button className="button l-35" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                    { this.state.escribir 
                        ?
                            <div className="s-center">
                                <h2>hola {this.state.nombre}</h2>
                                <span>tu correo es: {this.state.email}</span>
                            </div> 
                        : null
                    }
                </div>
                <div className="ed-item s-center">
                    <Link to="/pagina-cursos" className="button l-35 ghost dark-color">Ir a cursos</Link>
                </div>
            </Layout>
        )
    }
    
}
 
export default Formulario;