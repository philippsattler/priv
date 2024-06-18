import React from "react";
import './Card.css'

const Card = () => {
    return (
        <div className="card-container">
            <img className="round" src="image.jpg" alt="myself" />
            <h3>Philipp Sattler</h3>
            <p>Development Operator</p>
            <p>Ich bin ein begeisterter Softwareentwickler mit dem Ziel, mich sowohl fachlich als auch persönlich stetig weiterzubilden.</p>
            <br />
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>QlikView</li>
                    <li>QlikSense</li>
                    <li>Git</li>
                    <li>SQL</li>
                    <li>PL/SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;