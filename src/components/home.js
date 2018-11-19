import React from 'react';
import Nav from './nav';
import AboutMe from './aboutme';
import Footer from './footer';
import Portfolio from './portfolio';
import Contact from './contact';
import Skills from './skills';
import Header from './header';


export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}
