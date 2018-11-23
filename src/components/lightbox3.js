import React from 'react';
import Javascript from './icons/javascript';
import Html from './icons/html';
import Css from './icons/css';
import Git from './icons/git';
import Travis from './icons/travis';
import Jquery from './icons/jquery';
import ProjectPic from '../pictures/animalshelterpic.png';
// import Blog from '../pictures/Screen Shot 2018-11-16 at 3.12.37 PM.png';

export default function Lightbox3(props) {
    return (
        <section id="lightbox" onClick={() => props.onClick()} >
            <section id="lightbox-content">
                <h2>Animal Shelter Finder<span class="close cursor" onClick={() => props.onClick()}>&times; close</span></h2>
                <hr></hr>
                <img src={ProjectPic} alt="" />
                <h4>Project Brief</h4>
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button><a href="https://annahisenberg.github.io/Animal-shelter-finder/">Live Demo</a></button>
                <button><a href="https://github.com/annahisenberg/Animal-shelter-finder">Source Code</a></button>
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