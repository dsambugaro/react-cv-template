import React from "react";

const Resume = () => {
    return (
        <section class="section is-medium">
            <h1
                className="title has-text-white-bis has-background-primary"
                style={{width:'fit-content'}}
            >
                Hello there!
                </h1>
            <h2 className="subtitle">
                I'm <strong>Danilo Sambugaro</strong> and I'm taking my under degree in <strong>Computer Science</strong> at <strong><a href="http://www.utfpr.edu.br/campus/campomourao/" target="_blank" rel="author noopener noreferrer" alt="UTFPR website">Federal University of Technology - Paraná (UTFPR)</a></strong>, currently employed by <strong><a href="https://www.produtec.com.br" target="_blank" rel="author noopener noreferrer" alt="Produtec website">Produtec</a></strong>.
            </h2>
            <h2 className="subtitle">
                My first "Hello World" was during high school, around 2012. Since then I have been learning a lot and I'll learn even more, I hope. I'm a big Linux enthusiast, the same for Open Source projects. Being a little bit Maker, I like to play around with Raspberry Pi, Arduino, ESP32 and other microcontrollers for personal projects.
            </h2>
        </section>
    );
}

export default Resume;
