import React from 'react';

function Section3() {
    return (
        <section>
            <h1 className="text-center mt-5">My <span className="underline font-weight-bold">Services</span> </h1>
            <div className="aboutMe my-5">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="./img/imgSect1.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4>What I Offer?</h4>
                            <h3 className="font-weight-bold">The best creativity is the result of good work habits.</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="">
                                            <div className="card-body divAnim">
                                                <i className="logo fas fa-barcode fa-2x"></i>
                                                <h5 className="card-title font-weight-bold">Responsitivity</h5>
                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div className="card-body divAnim">
                                                <i className="logo fas fa-laptop-code fa-2x"></i>
                                                <h5 className="card-title font-weight-bold">Development</h5>
                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col">
                                        <div className="">
                                            <div className="card-body divAnim">
                                                <i className="logo fab fa-modx fa-2x"></i>
                                                <h5 className="card-title font-weight-bold">Clean Code</h5>
                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="">
                                            <div className="card-body divAnim">
                                                <i className="logo fas fa-tasks fa-2x"></i>
                                                <h5 className="card-title font-weight-bold">Custom Support</h5>
                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;