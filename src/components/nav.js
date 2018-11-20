import React, { Component } from 'react';

export default class Nav extends Component {
    scrollToAbout() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToSkills() {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToPortfolio() {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }

    scrollToContact() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <nav>
                <h2>A<span>I</span></h2>
                <ul>
                    <li onClick={() => this.scrollToAbout()}>ABOUT ME</li>
                    <li onClick={() => this.scrollToSkills()}>SKILLS</li>
                    <li onClick={() => this.scrollToPortfolio()}>PORTFOLIO</li>
                    <li onClick={() => this.scrollToContact()}>CONTACT</li>
                </ul>
            </nav>
        )
    }
}

// document.getElementById('youridhere').scrollIntoView();
