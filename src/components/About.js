import React from 'react'
import './About.css'
import { Element } from 'react-scroll'

const About = () => (
    <Element name="about">
        <section id="about">
            <div className="container">
                <h3 id="about-title" className="my-3">about</h3>
                <p>My name is Musab Abdullah and I am a computer science student at the University of Texas at Austin. I enjoy full stack web development, UI/UX design, and playing basketball. I work at Berkeley2 Academy as a college preparatory teacher which means I teach SAT/ACT classes as well as tutor students in AP classes. I also work at EcoCart as a Software Engineering Intern.</p>

                <div className="contact-item d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + '/mail.svg'} className="icon" />
                    <p className="icon-label ml-3 mb-0 align-baseline">musababdullah6231@gmail.com</p>
                </div>

                <div className="contact-item d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + '/phone.svg'} className="icon" />
                    <p className="icon-label ml-3 mb-0 align-baseline">(512)-791-6737</p>
                </div>

                <div className="contact-item d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + '/github.svg'} className="icon" />
                    <p className="icon-label ml-3 mb-0 align-baseline">github.com/musabdullah0</p>
                </div>

                <div className="contact-item d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + '/linkedin.svg'} className="icon" />
                    <p className="icon-label ml-3 mb-0 align-baseline">linkedin.com/in/musababdullah</p>
                </div>

            </div>

        </section>
    </Element>
)

export default About;