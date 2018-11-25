import React from 'react';
import Javascript from './icons/javascript';
import Html from './icons/html';
import Css from './icons/css';
import Express from './icons/express';
import Git from './icons/git';
import Mongo from './icons/mongo';
import Node from './icons/node';
import Travis from './icons/travis';
import Jquery from './icons/jquery';

export default function Lightbox2(props) {
    return (
        <section id="lightbox">
            <section id="lightbox-content">
                <span class="close cursor" onClick={() => props.onClick()}>&times;</span>
                <h2>The Foodie Diaries</h2>
                <hr></hr>
                <h4>Project Brief</h4>
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button><a href="https://immense-ridge-55909.herokuapp.com/api/Home" target="_blank">Live Demo</a></button>
                <button><a href="https://github.com/annahisenberg/food-diary-node" target="_blank">Source Code</a></button>
                <h4>Made with:</h4>
                <div>
                    <Css />
                    <Node />
                    <Express />
                    <Mongo />
                </div>
                <div>
                    <Git />
                    <Html />
                    <Javascript />
                    <Jquery />
                    <Travis />
                </div>
            </section>
        </section>
    )
}
