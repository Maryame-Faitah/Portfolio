import React from 'react';

function Section5() {
    return (
        <section>
            <h1 className="text-center mt-5">How to <span className="underline font-weight-bold">Contact me</span> </h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 justify-content-center">
                        <div className="divLogoContact">
                            <i className="fas fa-map-marker-alt fa-2x text-white"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="divLogoContact">
                            <i className="fas fa-mobile-alt fa-2x text-white"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="divLogoContact">
                            <i className="far fa-envelope-open fa-2x text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section5;