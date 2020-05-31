import React from 'react'
import './Header.css';
import { Link } from 'react-scroll'

const Header = () => (
    <section id="header" className="mb-5">
        {/* the links at the top of the screen */}
        <nav className="navbar navbar-fixed-top d-flex bd-highlight mb-3">

            <a className="nav-item mr-auto p-3" href="#header">musab</a>
            <Link activeClass="active" to="projects" className="nav-item p-3" spy={true} smooth={true} duration={500}>projects</Link>
            <Link activeClass="active" to="about" className="nav-item p-3" spy={true} smooth={true} duration={500}>about</Link>
        </nav>

        {/* the centered hero text */}
        <div className="hero d-flex flex-column justify-content-center text-white">
            <h3 className="p-2 text-center">UT CS Student<br />full stack developer</h3>
        </div>

        {/* the resume button */}
        <div className="resume-btn-container">
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf" className="resume-btn">resume</a>
        </div>


    </section>
)

export default Header;