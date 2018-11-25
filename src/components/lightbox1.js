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
import Blog from '../pictures/livingwithannah.png';

export default function Lightbox1(props) {
    return (
        <section id="lightbox" >
            <section id="lightbox-content">
                <span class="close cursor" onClick={() => props.onClick()}>&times;</span>
                <h2>Every Cook and Cranny</h2>
                <hr></hr>
                <img src={Blog} alt="blog-pic" />
                <h4>Project Brief</h4>
                <p>Every Cook and Cranny is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button>Live Demo</button>
                <button><a href="https://github.com/annahisenberg/react-capstone-client" target="_blank">Source Code</a></button>
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
