import React, { Component } from 'react'
import picture from '../pictures/linkedin-pic.jpeg';

export default class AboutMe extends Component {

    componentDidMount() {

        // const y = document.querySelectorAll('html');

        // window.addEventListener('scroll', (e) => {
        //     console.log(e);
        //     // window.scrollTo(300, 500);
        // })
        // console.log(y);

    }

    render() {
        return (
            <section id="about">
                <img src={picture} alt="" />
                <div>
                    <p>Hi, I'm Annah! I'm a self-taught Full-Stack Web Developer who is currently based in Dallas, TX, and I am passionate about building beautiful user interfaces and functional back-end APIs. I'm a quick learner who can easily master new technologies (especially since the world of technology is constantly changing), I work well in a team setting, and in my free time I love teaching myself something new. Right now I'm working on AngularJS.</p>
                    <p>You can view some of my recent work below. </p>
                </div>
            </section>
        )
    }
}
