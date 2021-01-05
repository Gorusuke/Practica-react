import {useEffect, useState} from 'react';

const useHook = (id) => {
    const [cursos, setCursos] = useState([]);

    const API = async (ident) => {
        let informacion;
        ident
            ? informacion = await fetch(`http://localhost:3000/cursos/${ident}`)
            : informacion = await fetch(`http://localhost:3000/cursos`)
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