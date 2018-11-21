import React from 'react'

export default function Lightbox(props) {
    return (
        <section id="lightbox">
            <section id="lightbox-content">
                <h2>Living With Annah - Personal Blog<span class="close cursor" onClick={() => props.onClick()}>&times; close</span></h2>
                <h4>Project Brief</h4>
                <p>Living With Annah is a personal lifestyle blog I created for myself. I use it to blog about my daily life.</p>
                <button>Live Demo</button>
                <button><a href="https://github.com/annahisenberg/react-capstone-client">Source Code</a></button>
                <h4>Made with:</h4>
                <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SCSS</li>
                </ul>
            </section>
        </section>
    )
}
