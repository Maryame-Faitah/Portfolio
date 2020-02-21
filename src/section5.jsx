import React from 'react';

function Section5() {
    return (
        <section>
            <h1 className="text-center mt-5">How to <span className="underline font-weight-bold">Contact me</span></h1>
            <div className="container text-center">
                <div className="row mt-5 no-gutters">
                    <div className="col-4">
                        <div className="divLogoContact">
                            <a href="#" className="iconesContact iContact1"><i className="fas fa-map-marker-alt fa-2x text-white"></i></a>
                            <p className="pLogo text-secondary my-2">10, Place de la Minoterie <br />
                                1080 Molenbeek, Belgium
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="divLogoContact">
                            <a href="#" className="iconesContact iContact2"><i className="fas fa-mobile-alt fa-2x text-white"></i></a>
                            <p className="pLogo text-secondary my-2">+(32)483685928</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="divLogoContact">
                            <a href="#" className="iconesContact iContact3"><i className="far fa-envelope-open fa-2x text-white"></i></a>
                            <p className="pLogo text-secondary my-2">faitah.maryame@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="w-50 mt-5">
                <div className="form-group row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="email@email.com" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="validationTextarea" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btnSubmit text-white rounded-pill mt-3">Submit</button>
            </form>
        </section >
    )
}

export default Section5;