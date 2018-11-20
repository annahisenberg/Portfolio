import React, { Component } from 'react';
import Blog from '../pictures/Screen Shot 2018-11-16 at 3.12.37 PM.png';
import Lightbox from './lightbox';

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            showLightbox: false
        }
    }
    showLightbox() {
        console.log('show lightbox');

        this.setState({
            showLightbox: true
        })
    }

    render() {
        return (
            <section id="portfolio">
                <h2>PORTFOLIO</h2>
                {this.state.showLightbox === true ? <Lightbox /> : null}
                <div>
                    <section className="card" onClick={() => this.showLightbox()}>
                        <img src={Blog} alt="" />
                        <div class="overlay"></div>
                        <div className="container">
                            <p>Living With Annah - A Personal Blog</p>
                            {/* <button>Live Demo</button>
                        <button><a href="https://github.com/annahisenberg/react-capstone-client">Source Code</a></button> */}
                        </div>
                    </section>
                    <section className="card">
                        <img src={Blog} alt="" />
                        <div class="overlay"></div>
                        <div className="container">
                            <p>The Foodie Diaries</p>
                        </div>
                        {/* <button><a href="https://immense-ridge-55909.herokuapp.com/api/Home">Live Demo</a></button> */}
                        {/* <button><a href="https://github.com/annahisenberg/food-diary-node">Source Code</a></button> */}
                    </section>
                    <section className="card">
                        <img src={Blog} alt="" />
                        <div class="overlay"></div>
                        <div className="container">
                            <p>Animal Shelter Finder</p>
                        </div>
                        {/* <button><a href="https://annahisenberg.github.io/Animal-shelter-finder/">Live Demo</a></button> */}
                        {/* <button><a href="https://github.com/annahisenberg/Animal-shelter-finder">Source Code</a></button> */}
                    </section>
                </div>
            </section>
        )
    }
}
