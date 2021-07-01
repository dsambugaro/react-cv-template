import React from "react";

import { Avatar } from "./img";
import ptBR from "../assets/cv_PT-BR.pdf";
import enUS from "../assets/cv_EN.pdf";
import brFlag from "../assets/br.svg";
import usFlag from "../assets/us.svg";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="side-head">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <Avatar
                            src={"https://avatars.githubusercontent.com/u/13372649"}
                            alt={"Danilo Sambugaro"}
                        />
                    </div>
                </nav>
                <p className="title has-text-centered">Danilo Sambugaro</p>
                <p className="subtitle has-text-centered">Software developer</p>
            </div>
            <div className="side-body has-text-centered">
                <p className="title is-5">Curriculum Vitae</p>
                <a
                    href={enUS}
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Curriculum Vitae in EN-US"
                    className="icon-text flag"
                >
                    <figure className={`image is-24x24`}>
                        <img
                            src={usFlag}
                            alt="EUA flag"
                        />
                    </figure>
                </a>
                <a
                    href={ptBR}
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Curriculum Vitae in PT-BR"
                    className="icon-text flag"
                >
                    <figure className={`image is-24x24`}>
                        <img
                            src={brFlag}
                            alt="Brazil flag"
                        />
                    </figure>
                </a>
                <br />
            </div>
            <div className="side-footer has-text-centered">
                <a
                    href="https://github.com/dsambugaro"
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Github profile"
                    className="icon-text"
                >
                    <span className="icon is-large">
                        <i className="fab fa-2x fa-github"></i>
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/dsambugaro/"
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="LinkedIn profile"
                    className="icon-text"
                >
                    <span className="icon is-large">
                        <i class="fab fa-2x fa-linkedin"></i>
                    </span>
                </a>
                <a
                    href="http://instagram.com/dsambugaro"
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Instagram profile"
                    className="icon-text"
                >
                    <span className="icon is-large">
                        <i class="fab fa-2x fa-instagram"></i>
                    </span>
                </a>
                <a
                    href="https://t.me/dsambugaro"
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Instagram profile"
                    className="icon-text"
                >
                    <span className="icon is-large">
                        <i class="fab fa-2x fa-telegram"></i>
                    </span>
                </a>
                <a
                    href="mailto:dan.sambugaro@gmail.com"
                    target="_blank"
                    rel="author noopener noreferrer"
                    alt="Send an e-mail to"
                    className="icon-text"
                >
                    <span className="icon is-large">
                        <i className="fas fa-2x fa-envelope"></i>
                    </span>
                </a>
            </div>
        </section>
    );
}

export default Sidebar;
