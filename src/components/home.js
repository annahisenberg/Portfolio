import React from 'react';
import Nav from './nav';
import AboutMe from './aboutme';
import Footer from './footer';
import Portfolio from './portfolio';
import Skills from './skills';
import Header from './header';


export default function Home() {
    return (
        <div className="main">
            <Nav />
            <Header />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Footer />
        </div>
    )
}
