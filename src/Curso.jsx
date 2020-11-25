import React from 'react';



const Curso = (props) => {
    const {} = props;
    return (
        <div className="ed-grid ed-container">
            <div className="ed-item s-50 m-to-center">
                <h1 className="s-center s-mt-4">Nombre del curso</h1>
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl l-block">
                    <img src="https://edteam-media.s3.amazonaws.com/courses/original/e7fbb7f9-773c-426a-bbb5-14276a37af33.png" alt="imagen"/>
                </div>
                <p className="m-grid-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore optio sapiente distinctio praesentium obcaecati maxime animi iste recusandae. Nam aliquam fuga illo doloremque, praesentium voluptatem quas alias temporibus molestias!</p>
                <div className="s-main-center">
                    <button className="button--ghost-alert button--tiny">$ 20USD</button>
                </div>
            </div>
        </div>
        
    );
}
 
export default Curso;