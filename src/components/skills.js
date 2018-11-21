import React from 'react';
import Javascript from './icons/javascript';
import Html from './icons/html';
import Css from './icons/css';
import Express from './icons/express';
import Git from './icons/git';
import Heroku from './icons/heroku';
import Jquery from './icons/jquery';
import Mocha from './icons/mocha';
import Mongo from './icons/mongo';
import Node from './icons/node';
import Reactjs from './icons/reactjs';
import Redux from './icons/redux';
import Sass from './icons/sass';
import Travis from './icons/travis';

export default function Skills() {
    return (
        <section id="skills">
            <h2>SKILLS</h2>
            <div>
                <Javascript />
                <Html />
                <Css />
                <Express />
                <Git />
                <Heroku />
                <Jquery />
            </div>
            <div>
                <Mocha />
                <Mongo />
                <Node />
                <Reactjs />
                <Redux />
                <Sass />
                <Travis />
            </div>
        </section>
    )
}
