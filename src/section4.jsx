import React from 'react';

function Section4() {
    let array = [];

    let fct1 = () => {
        let array = document.getElementsByClassName('box-item');
        for (let i = 0; i < array.length; i++) {
            array[i].classList.remove('d-none');
        }
    }
    // let fct1 = ()=>{
    //     let all = document.getElementById('btnAll');
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i].classList.contains('all')) {
    //             array[i].classList.add("d-flex");
    //             array[i].classList.remove("d-none");
    //         } else {
    //             array[i].classList.remove("d-flex");
    //             array[i].classList.add("d-none");
    //         }
    //     }
    // }
    let fct2 = () => {
        let array = document.getElementsByClassName('box-item');
        for (let i = 0; i < array.length; i++) {
            if (array[i].classList.contains('illustrator')) {
                array[i].classList.add('d-block');
            } else {
                array[i].classList.add('d-none');
                array[i].classList.remove('d-block');

            }
        }
    }
    // let fct2 = () => {
    //     let illustrator = document.getElementById('btnIllustrator');
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i].classList.contains('illustrator')) {
    //             array[i].classList.add("d-flex");
    //             array[i].classList.remove("d-none");
    //         } else {
    //             array[i].classList.remove("d-flex");
    //             array[i].classList.add("d-none");
    //         }
    //     }
    // }
    let fct3 = () => {
        let array = document.getElementsByClassName('box-item');
        for (let i = 0; i < array.length; i++) {
            if (array[i].classList.contains('photoshop')) {
                array[i].classList.add('d-block');
            } else {
                array[i].classList.add('d-none');
                array[i].classList.remove('d-block');

            }
        }
    }
    // let fct3 = () => {
    //     let photoshop = document.getElementById('btnPhotoshop');
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i].classList.contains('photoshop')) {
    //             array[i].classList.add("d-flex");
    //             array[i].classList.remove("d-none");
    //         } else {
    //             array[i].classList.remove("d-flex");
    //             array[i].classList.add("d-none");
    //         }
    //     }
    // }

    return (
        <section id="section4">
            <h1 className="text-center my-5">My <span className="underline font-weight-bold">Projects</span> </h1>
            <div className="btnFiltres text-center mb-5">
                <button type="button" id="btnAll" className="btn text-white mx-2 rounded-pill" onClick={() => fct1()}>All</button>
                <button type="button" id="btnIllustrator" className="btn text-white mx-2 rounded-pill" onClick={() => fct2()}>Illustrator</button>
                <button type="button" id="btnPhotoshop" className="btn text-white mx-2 rounded-pill" onClick={() => fct3()}>Photoshop</button>
            </div>
            {/* <div>
                <img src="./img/noir-blanc1.jpeg" alt="" className="all photoshop"/>
                <img src="./img/noir-blanc2.jpeg" alt="" className="all illustrator"/>
                <img src="./img/noir-blanc3.jpeg" alt="" className="all illustrator"/>
                <img src="./img/noir-blanc4.jpeg" alt="" className="all illustrator"/>
                <img src="./img/noir-blanc5.jpeg" alt="" className="all photoshop"/>
                <img src="./img/noir-blanc6.jpeg" alt="" className="all illustrator"/>
                <img src="./img/noir-blanc7.jpeg" alt="" className="all photoshop"/>
            </div> */}
            <div className="content">
                <div className="filter menu">
                    <div className="filters">
                        <ul className="list-unstyled">
                            <li>
                                <button type="button" id="btnAll"  className="btn text-white mx-2 rounded-pill" onClick={fct1}>All</button>
                                <button type="button" id="btnIllustrator" className="btn text-white mx-2 rounded-pill" onClick={fct2}>Illustrator</button>
                                <button type="button" id="btnPhotoshop" className="btn text-white mx-2 rounded-pill" onClick={fct3}>Photoshop</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-items">
                <div className="row mb-4 no-gutters">
                    <div className="col-md-4 col-12 box-item illustrator">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/illustrator.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 box-item illustrator">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/illustrator.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 box-item photoshop">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/photoshop.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 no-gutters">
                    <div className="col-md-4 col-12 box-item illustrator">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/illustrator.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 box-item photoshop">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/photoshop.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 box-item photoshop">
                        <div className="image">
                            <a href="https://www.google.com">
                                <img src="./img/photoshop.png" alt="" className="w-100" />
                                <div className="overlay"> </div>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}


export default Section4;