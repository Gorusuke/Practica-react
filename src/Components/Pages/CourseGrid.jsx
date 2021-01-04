import React from 'react';
import {useSelector} from 'react-redux'
import CourseCard from './CourseCard';
import Layout from '../Layout/Layout';
// import useHook from '../Custom Hooks/useHook';

// Redux
// import {getCourses} from '../../Redux/actions/actionCreator'



const CourseGrid = () => {
    // const categoria = useHook(); 
    const categoria = useSelector(state => state.cursos.courses)

    // const dispatch = useDispatch();

    // // Mandar a llamar el action de addToCart
    // const cursos = (id) => dispatch(getCourses())

    return (
        <Layout>
            <h1 className="s-center l-section s-pt-4">Listado de Cursos</h1>
            <div className="ed-grid m-grid-2 l-grid-3 xl-grid-4 l-big-section">
                {categoria.map(curso => (
                    <CourseCard
                        key={curso.id}
                        curso={curso}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default CourseGrid;