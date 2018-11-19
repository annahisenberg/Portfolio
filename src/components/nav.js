import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h2>AI</h2>
                <ul>
                    <li><a href="#">ABOUT ME</a></li>
                    <li><a href="#">SKILLS</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}

// document.getElementById('youridhere').scrollIntoView();
