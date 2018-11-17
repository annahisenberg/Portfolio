import React, { Component } from 'react'
import picture from '../pictures/linkedin-pic.jpeg';

export default class AboutMe extends Component {
    componentDidMount() {
        let canvas = document.querySelector('canvas');
        // canvas.width = window.innerWidth;
        canvas.width = 1440;
        // canvas.height = window.innerHeight;
        canvas.height = 500;

        var c = canvas.getContext('2d');

        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;

            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = 'pink';
                c.stroke();
                c.fill();
            }

            this.update = function () {
                if (this.x + this.radius > 1440 || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }

                if (this.y + this.radius > 500 || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }

                this.x += this.dx;
                this.y += this.dy;

                this.draw();
            }
        }

        //array which holds a bunch of randomly placed and sized circles
        var circleArray = [];

        //for loop creates a bunch of random circles
        for (let i = 0; i < 300; i++) {
            var radius = Math.random() * 30;
            var x = Math.random() * (1440 - radius * 2) + radius;
            var y = Math.random() * (500 - radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }


        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, 1440, 500);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }
        animate();
    }

    render() {
        return (
            <section>
                <canvas>
                    <div>
                        <img src={picture} alt="" />
                        <p>Hi, I'm Annah! I'm a self-taught Full-Stack Web Developer who is currently based in Dallas, TX, and I am passionate about building beautiful user interfaces and functional back-end APIs. I'm a quick learner who can easily master new technologies (especially since the world of technology is constantly changing), I work well in a team setting, and in my free time I love teaching myself something new. Right now I'm working on AngularJS.</p>
                        <p>You can view some of my recent work below. </p>
                    </div>
                </canvas>
            </section>
        )
    }
}
