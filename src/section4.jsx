import React from 'react';

function Section4() {
    return (
        <section>
            <h1 className="text-center my-5">My <span className="underline font-weight-bold">Projects</span> </h1>
            <div className="btnFiltres text-center mb-5">
                <button type="button" id="btnAll" className="btn text-white mx-2 rounded-pill">All</button>
                <button type="button" id="btnIllustrator" className="btn text-white mx-2 rounded-pill">Illustrator</button>
                <button type="button" id="btnPhotoshop" className="btn text-white mx-2 rounded-pill">Photoshop</button>
            </div>
            <div>
                <img src="./img/noir-blanc1.jpeg" alt=""/>
                <img src="./img/noir-blanc2.jpeg" alt=""/>
                <img src="./img/noir-blanc3.jpeg" alt=""/>
                <img src="./img/noir-blanc4.jpeg" alt=""/>
                <img src="./img/noir-blanc5.jpeg" alt=""/>
                <img src="./img/noir-blanc6.jpeg" alt=""/>
                <img src="./img/noir-blanc7.jpeg" alt=""/>
            </div>
        </section>
    )
}

export default Section4;