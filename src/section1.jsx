import React from 'react';

function Section1() {
    return (
        <section>
            <div className="aboutMe my-5 w-75">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        {/* <img src="./img/imgSect1.jpg" className="card-img" alt="..." /> */}
                        <iframe width="450" height="500" src="https://www.youtube.com/embed/fOJ-KKtzDXI"
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4>I'm Maryame Faitah</h4>
                            <h3 className="font-weight-bold">I'm Web Designer - Web Developer - Coder - Programmer</h3>
                            <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Iure atque itaque, fuga ad repellat nesciunt, distinctio
                                eum maiores odio nisi quia voluptas eos voluptatum!
                                Odio inventore beatae recusandae quod sint.
                            </p>
                            <h6 className="font-weight-bold">Development</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar w-95" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <h6 className="font-weight-bold">Design</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar w-88" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">88%</div>
                            </div>
                            <h6 className="font-weight-bold">Branding</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar w-82" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">82%</div>
                            </div>
                            <h6 className="font-weight-bold">Marketing</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <a className="btn btn-sm font-weight-bold text-white mt-4"href="./img/imgSect1.jpg" download="Maryame_CV">Download my CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div className="container">
        //     <div className="row">
        //         <div className="col-6 h-100 w-100">
        //             <img src="./../img/girlcoder.jpg" alt="" />
        //         </div>
        //         <div className="col-6">
        //             <h5>I'm Maryame Faitah</h5>
        //             <h3>I'm Web Designer - Web Developer - Coder - Programmer</h3>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                 Iure atque itaque, fuga ad repellat nesciunt, distinctio
        //                 eum maiores odio nisi quia voluptas eos voluptatum!
        //             Odio inventore beatae recusandae quod sint.</p>
        //         </div>
        //     </div>
        // </div> 
    )
}

export default Section1;