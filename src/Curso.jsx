import React from 'react';


const Curso = (props) => {
    const {match} = props;
    const cursos = [
        {
            id: 1,
            title: "Desarrollo web",
            image: "https://edteam-media.s3.amazonaws.com/courses/original/e7fbb7f9-773c-426a-bbb5-14276a37af33.png",
            price: "20 USD",
            teacher: "Jose Garcia",
            avatar: "https://avatars2.githubusercontent.com/u/64686153?s=460&u=a2e89860c31b8e0cf9af8fc919a97f175e49f8a2&v=4"
        },
        {
            id: 2,
            title: "Programación con Go",
            image: "https://edteam-media.s3.amazonaws.com/courses/big/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
            price: "35 USD",
            teacher: "Juan Perez",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg"
        },
        {
            id: 3,
            title: "Librerias de Javascript",
            image: "https://edteam-media.s3.amazonaws.com/courses/big/e8207ec4-e9a7-4cba-86a8-ee80c443a37f.jpg",
            price: "25 USD",
            teacher: "Joseph washintong",
            avatar: "https://randomuser.me/api/portraits/men/70.jpg"
        },
        {
            id: 4,
            title: "React desde cero",
            image: "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
            price: "35 USD",
            teacher: "Sofia Lopez",
            avatar: "https://randomuser.me/api/portraits/women/38.jpg"
        }
    ]

    const cursoActual = cursos.filter(curso => curso.id === parseInt(match.params.id))[0]
    // console.info(cursoActual)


    return (
        <div className="ed-grid ed-container">
            <div className="ed-item s-50 m-to-center">
                <h1 className="s-center s-mt-4">{cursoActual.title}</h1>
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl l-block">
                    <img src={cursoActual.image} alt={cursoActual.title}/>
                </div>
                <p className="m-grid-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore optio sapiente distinctio praesentium obcaecati maxime animi iste recusandae. Nam aliquam fuga illo doloremque, praesentium voluptatem quas alias temporibus molestias!</p>
                <div className="s-main-center">
                    <button className="button--ghost-alert button--tiny">$ {cursoActual.price}</button>
                </div>
            </div>
        </div>
        
    );
}
 
export default Curso;