import React from 'react';

//maryame je dois trop faire kk, je peux pas aller qqpart avc eux apres les cours
function Header() {
    return (
        <header id="header">
            <nav className="navbar">
                <a className="navbar-brand font-weight-bold text-dark" href="#header">
                    <img src="" width="30"
                        height="30" className="d-inline-block align-top" alt="" />
                    Maryame
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active text-dark" href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#section1">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#section2">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#section3">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#section4">Contact me</a>
                    </li>
                </ul>
            </nav>

            {/* <img src={codeur} alt="" className="w-100" /> */}
            <div className="d-flex justify-content-center text-center w-100 h-100">
                <div className="titre">
                    <h2 className="text-light mb-4">Welcome!</h2>
                    <h1 className="text-light mb-4">I'm a <span>developer</span></h1>
                    <div className="icones">
                        <a className="fab fa-facebook-f fa-lg text-white mx-2 hoverLink"></a>
                        <a className="fab fa-instagram fa-lg text-white mx-2 hoverLink"></a>
                        <a className="fab fa-linkedin-in fa-lg text-white mx-2 hoverLink"></a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;