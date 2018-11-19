import React from 'react'

export default function Lightbox() {
    return (
        <section>
            <h2>Living With Annah - Personal Blog</h2>
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
    )
}
