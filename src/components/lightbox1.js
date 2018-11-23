import React from 'react';
import Javascript from './icons/javascript';
import Html from './icons/html';
import Css from './icons/css';
import Express from './icons/express';
import Git from './icons/git';
import Mongo from './icons/mongo';
import Node from './icons/node';
import Reactjs from './icons/reactjs';
import Redux from './icons/redux';
import Sass from './icons/sass';
import Travis from './icons/travis';

export default function Lightbox1(props) {
    return (
        <section id="lightbox" onClick={() => props.onClick()} >
            <section id="lightbox-content">
                <h2>Living With Annah - Personal Blog<span class="close cursor" onClick={() => props.onClick()}>&times; close</span></h2>
                <hr></hr>
                <h4>Project Brief</h4>
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button>Live Demo</button>
                <button><a href="https://github.com/annahisenberg/react-capstone-client">Source Code</a></button>
                <h4>Made with:</h4>
                <div>
                    <Reactjs />
                    <Redux />
                    <Css />
                    <Node />
                    <Express />
                </div>
                <div>
                    <Mongo />
                    <Sass />
                    <Git />
                    <Html />
                    <Javascript />
                    <Travis />
                </div>
            </section>
        </section>
    )
}
