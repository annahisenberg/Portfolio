import React, { Component } from 'react'
import picture from '../pictures/linkedin-pic.jpeg';

export default class AboutMe extends Component {
    render() {
        return (
            <section id="about">
                <img src={picture} alt="" />
                <div>
                    <h2>ABOUT ME</h2>
                    <p>I'm a self-taught Full-Stack Web Developer who is currently based in Dallas, TX. I am passionate about building beautiful user interfaces and functional back-end APIs. I'm a quick learner who can easily master new technologies (especially since the world of technology is constantly changing), I work well in a team setting, and in my free time I love teaching myself something new. Right now I'm working on AngularJS.</p>
                    <p>You can view some of my recent work below. </p>
                </div>
            </section>
        )
    }
}
