import React from 'react'
import './Header.css';
import { Link } from 'react-scroll'
import p5 from 'p5'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        let sigma = 20;
        let rho = 45;
        let beta = 5.9;

        let x = 0.01;
        let y = 0;
        let z = 0;

        let attractor = [];

        p.setup = () => {
            p.createCanvas(500, 500, p.WEBGL);
            p.smooth();
            p.background(0);
            p.perspective();
            p.colorMode(p.HSB);
        }

        p.draw = () => {
            let dt = 0.008;
            x += (sigma * (y - x)) * dt;
            y += (x * (rho - z) - y) * dt;
            z += (x * y - beta * z) * dt;

            attractor.push(p.createVector(x, y, z));
            if (attractor.length > 100) {
                attractor.shift()
            }
            p.scale(3);
            p.fill(0, 0, 0, 0)

            p.beginShape();
            let hu = 0;
            for (let v of attractor) {
                p.stroke(hu, 255, 255)
                p.vertex(v.x, v.y, v.z);
                hu += 0.1;
                if (hu > 255) {
                    hu = 0;
                }
            }
            p.endShape()
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (

            <section id="header" className="mb-5">
                {/* the links at the top of the screen */}
                <nav className="navbar navbar-fixed-top d-flex bd-highlight mb-3">

                    <a className="nav-item mr-auto p-3" href="#header">
                        <img src={process.env.PUBLIC_URL + '/moose.svg'} id="logo" alt="moose logo"></img>
                    </a>
                    <Link activeClass="active" to="projects" className="nav-item p-3" spy={true} smooth={true} duration={500}>projects</Link>
                    <Link activeClass="active" to="about" className="nav-item p-3" spy={true} smooth={true} duration={500}>about</Link>
                </nav>
                <div id="sketch-container">
                    <div ref={this.myRef}></div>
                    <div className="overlap">
                        {/* the centered hero text */}
                        <div className="hero d-flex flex-column justify-content-center text-white">
                            <h3 className="p-2 text-center">UT CS Student<br />full stack developer</h3>
                        </div>

                        {/* the resume button */}
                        <div className="resume-btn-container">
                            <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf" className="resume-btn">resume</a>
                        </div>
                    </div>

                </div>


            </section>
        )
    }
}

// const Header = () => (
// <section id="header" className="mb-5">
//     {/* the links at the top of the screen */}
//     <nav className="navbar navbar-fixed-top d-flex bd-highlight mb-3">

//         <a className="nav-item mr-auto p-3" href="#header">musab</a>
//         <Link activeClass="active" to="projects" className="nav-item p-3" spy={true} smooth={true} duration={500}>projects</Link>
//         <Link activeClass="active" to="about" className="nav-item p-3" spy={true} smooth={true} duration={500}>about</Link>
//     </nav>

//     {/* the centered hero text */}
//     <div className="hero d-flex flex-column justify-content-center text-white">
//         <h3 className="p-2 text-center">UT CS Student<br />full stack developer</h3>
//     </div>

//     {/* the resume button */}
//     <div className="resume-btn-container">
//         <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf" className="resume-btn">resume</a>
//     </div>


// </section>
// )

export default Header;