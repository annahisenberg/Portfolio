import React from 'react';
import Blog from '../pictures/Screen Shot 2018-11-16 at 3.12.37 PM.png';

export default function Portfolio() {
    return (
        <section>
            <h2>PORTFOLIO</h2>
            <section>
                <h3>Living With Annah - Personal Blog</h3>
                <img src={Blog} alt="" />
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button>Live Demo</button>
                <button><a href="https://github.com/annahisenberg/react-capstone-client">Source Code</a></button>
                <p>Made with:</p>
                <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SCSS</li>
                </ul>
            </section>
            <section>
                <h3>The Foodie Diaries</h3>
                <img src="#" alt="" />
                <p>The Foodie Diaries is a food blog that lets you keep track of what you eat every day.</p>
                <button><a href="https://immense-ridge-55909.herokuapp.com/api/Home">Live Demo</a></button>
                <button><a href="https://github.com/annahisenberg/food-diary-node">Source Code</a></button>
                <p>Made With:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>Heroku</li>
                </ul>
            </section>
            <section>
                <h3>Animal Shelter Finder</h3>
                <img src="#" alt="" />
                <p>I used Petfinder's API to display a list of animal shelters in the zip code the user types in.</p>
                <button><a href="https://annahisenberg.github.io/Animal-shelter-finder/">Live Demo</a></button>
                <button><a href="https://github.com/annahisenberg/Animal-shelter-finder">Source Code</a></button>
                <p>Made With:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>Heroku</li>
                </ul>
            </section>
        </section>
    )
}
