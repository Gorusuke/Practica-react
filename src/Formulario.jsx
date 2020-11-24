import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            nombre: '',
            email: ''
        }
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
            <>
                <div className="ed-grid">
                    <h1 className="color red-500 s-center">Formulario</h1>
                    <form>
                        <div className="ed-container">
                            <div className="ed-item form__item s-100">
                                <label className="s-left" htmlFor="nombre">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Tu Nombre"
                                    onChange={(e) => this.setState({
                                        nombre: e.target.value
                                    })}
                                    // value={formulario.nombre}
                                />
                            </div>
                            <div className="ed-item form__item s-100">
                                <label className="s-left" htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Tu email"
                                    onChange={(e) => this.setState({
                                        email: e.target.value
                                    })}
                                    // value={formulario.email}
                                />
                            </div>
                            <div className="ed-item form__item s-100">
                                <button className="button full">Enviar</button>
                            </div>
                        </div>
                    </form>
                    <h2>hola {this.state.nombre}</h2>
                    <span>tu correo es: {this.state.email}</span>
                </div>                
            </>
        )
    }
    
}
 
export default Formulario;