import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="divFooter mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <a className="mx-3 hoverIcones d-inline-block"><i className="fab fa-facebook-f fa-1x text-white"></i></a>
                            <a className="mx-3 hoverIcones d-inline-block"><i className="fab fa-instagram fa-1x text-white"></i></a>
                            <a className="mx-3 hoverIcones d-inline-block"><i className="fab fa-linkedin-in fa-1x text-white"></i></a>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <p className="text-white">© 2020 Designed by <strong>Maryame</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;