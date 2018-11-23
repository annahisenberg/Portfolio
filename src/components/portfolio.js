import React, { Component } from 'react';
import Blog from '../pictures/Screen Shot 2018-11-16 at 3.12.37 PM.png';
import Lightbox1 from './lightbox1';
import Lightbox2 from './lightbox2';
import Lightbox3 from './lightbox3';
import ProjectPic from '../pictures/animalshelterpic.png';

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            showLightbox1: false,
            showLightbox2: false,
            showLightbox3: false,
            isHovering1: false,
            isHovering2: false,
            isHovering3: false
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

    handleMouseHover1() {
        this.setState(this.toggleHover1State);
    }

    toggleHover1State(state) {
        return {
            isHovering1: !state.isHovering1
        }
    }

    handleMouseHover2() {
        this.setState(this.toggleHover2State);
    }

    toggleHover2State(state) {
        return {
            isHovering2: !state.isHovering2
        }
    }

    handleMouseHover3() {
        this.setState(this.toggleHover3State);
    }

    toggleHover3State(state) {
        return {
            isHovering3: !state.isHovering3
        }
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
                        onMouseEnter={() => this.handleMouseHover1()}
                        onMouseLeave={() => this.handleMouseHover1()}
                    >
                        <img src={Blog} alt="" />
                        <div class="overlay"></div>
                    </section>
                    <section className="card"
                        onClick={() => this.showLightbox2()}
                        onMouseEnter={() => this.handleMouseHover2()}
                        onMouseLeave={() => this.handleMouseHover2()}
                    >
                        <img src={Blog} alt="" />
                        <div class="overlay"></div>
                    </section>
                    <section className="card"
                        onClick={() => this.showLightbox3()}
                        onMouseEnter={() => this.handleMouseHover3()}
                        onMouseLeave={() => this.handleMouseHover3()}
                    >
                        <img src={ProjectPic} alt="" />
                        <div class="overlay"></div>
                    </section>
                </div>
            </section>
        )
    }
}
