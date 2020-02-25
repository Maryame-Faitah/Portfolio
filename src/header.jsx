import React from 'react';

//maryame je dois trop faire kk, je peux pas aller qqpart avc eux apres les cours
function Header() {
    //Animation texte centre header
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 300 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };
    return (
        <header id="header">
            {/* Barre de navigation */}
            <nav className="navbar">
                <a className="navbar-brand font-weight-bold text-light" href="#header">
                    <img src="" width="30"
                        height="30" className="d-inline-block align-top" alt="" />
                    Maryame .
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active text-light" href="#header">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#section1">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#section2">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#section3">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#section4">Contact me</a>
                    </li>
                </ul>
            </nav>
            {/* Texte milieu header */}
            <div className="d-flex justify-content-center flex-column text-center w-100 h-100">
                <div className="titre">
                    <h4 className="text-light mb-4">Welcome!</h4>
                    {/* <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" /> */}
                    <h1 className="text-light mb-4">I am <span className="txt-rotate" data-period="2000" data-rotate='[ "a coder.", "a developer.", "a programmer.", "Maryame Faitah!" ]'></span>
                    </h1>
                    <div className="icones">
                        <a className="fab fa-facebook-f fa-lg text-white mx-2 hoverLink"></a>
                        <a className="fab fa-instagram fa-lg text-white mx-2 hoverLink"></a>
                        <a className="fab fa-linkedin-in fa-lg text-white mx-2 hoverLink"></a>
                    </div>
                </div>
                <a href="#section1"> 
                    <div id="arrow-down">
                        <i className="fas fa-angle-down fa-4x text-white mt-5"></i>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header;