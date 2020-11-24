import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props)    
    }

    render(){
        return (
            <>
                <div className="ed-grid">
                    <h1 className="color red-500">Formulario</h1>
                    <div className="ed-container">
                        <div className="ed-item form__item s-100">
                            <label className="s-left" htmlFor="nombre">Nombre Completo</label>
                            <input type="text"  id="nombre"/>
                        </div>
                        <div className="ed-item form__item s-100">
                            <label className="s-left #FF3C32" htmlFor="email">Email</label>
                            <input type="email"  id="email"/>
                        </div>
                        <div className="ed-item form__item s-100">
                            <button className="button full">Enviar</button>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
    
}
 
export default Formulario;