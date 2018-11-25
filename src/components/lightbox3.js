import React from 'react';
import Javascript from './icons/javascript';
import Html from './icons/html';
import Css from './icons/css';
import Git from './icons/git';
import Travis from './icons/travis';
import Jquery from './icons/jquery';
import ProjectPic from '../pictures/animalshelterpic.png';

export default function Lightbox3(props) {
    return (
        <section id="lightbox">
            <section id="lightbox-content">
                <span class="close cursor" onClick={() => props.onClick()}>&times;</span>
                <h2>Animal Shelter Finder</h2>
                <hr></hr>
                <img src={ProjectPic} alt="" />
                <h4>Project Brief</h4>
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button><a href="https://annahisenberg.github.io/Animal-shelter-finder/" target="_blank">Live Demo</a></button>
                <button><a href="https://github.com/annahisenberg/Animal-shelter-finder" target="_blank">Source Code</a></button>
                <h4>Made with:</h4>
                <div>
                    <Css />
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