import React, { Component } from 'react';
import Blog from '../pictures/Screen Shot 2018-11-16 at 3.12.37 PM.png';
import Lightbox1 from './lightbox1';
import Lightbox2 from './lightbox2';
import Lightbox3 from './lightbox3';
import ProjectPic from '../pictures/animalshelterpic.png';
import FoodDiary from '../pictures/fooddiary.png';

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            showLightbox1: false,
            showLightbox2: false,
            showLightbox3: false
        }
    }
    showLightbox1() {
        this.setState({
            showLightbox1: true
        })
    }

    showLightbox2() {
        this.setState({
            showLightbox2: true
        })
    }

    showLightbox3() {
        this.setState({
            showLightbox3: true
        })
    }

    closeLightbox() {
        this.setState({
            showLightbox1: false,
            showLightbox2: false,
            showLightbox3: false
        })
    }

    render() {
        return (
            <section id="portfolio">
                <h2>RECENT WORK</h2>
                {this.state.showLightbox1 === true ? <Lightbox1 onClick={() => this.closeLightbox()} /> : null}
                {this.state.showLightbox2 === true ? <Lightbox2 onClick={() => this.closeLightbox()} /> : null}
                {this.state.showLightbox3 === true ? <Lightbox3 onClick={() => this.closeLightbox()} /> : null}
                <div>
                    <section
                        className="card"
                        onClick={() => this.showLightbox1()}
                    >
                        <img src={Blog} alt="blog picture" />
                        <div class="container">
                            <h4>Every Cook and Cranny</h4>
                        </div>
                        <div class="overlay"></div>
                    </section>
                    <section className="card"
                        onClick={() => this.showLightbox2()}
                    >
                        <img src={FoodDiary} alt="food diary picture" />
                        <div class="container">
                            <h4>The Foodie Diaries</h4>
                        </div>
                        <div class="overlay"></div>
                    </section>
                    <section className="card"
                        onClick={() => this.showLightbox3()}
                    >
                        <img src={ProjectPic} alt="Animal Shelter Finder picture" />
                        <div class="container">
                            <h4>Animal Shelter Finder</h4>
                        </div>
                        <div class="overlay"></div>
                    </section>
                </div>
            </section>
        )
    }
}
