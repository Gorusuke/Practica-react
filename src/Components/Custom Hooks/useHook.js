import {useEffect, useState} from 'react';

const useHook = (id) => {
    const [cursos, setCursos] = useState([]);

    const API = async (ident) => {
        const informacion = await fetch(`http://localhost:3000/cursos/${ident}`)
        const resultado = await informacion.json();
        setCursos(resultado);
    }

    useEffect(() => {
        API(id)
        // eslint-disable-next-line
    }, []);

    return cursos;

}
 
export default useHook;