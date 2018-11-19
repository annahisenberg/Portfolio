import React, { Component } from 'react'

export default class Header extends Component {
    componentDidMount() {
        let canvas = document.querySelector('canvas');
        // canvas.width = window.innerWidth;
        canvas.width = 1440;
        // canvas.height = window.innerHeight;
        canvas.height = 500;

        const colors = ['#5C37D4', '#1f083e', '#605ba5']
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        var c = canvas.getContext('2d');

        function Circle(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;

            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                // c.strokeStyle = '';
                // c.stroke();
                c.fillStyle = color;
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
        for (let i = 0; i < 70; i++) {
            var radius = Math.random() * 20;
            var x = Math.random() * (1440 - radius * 2) + radius;
            var y = Math.random() * (500 - radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            var color = colors[Math.floor(Math.random() * colors.length)];
            circleArray.push(new Circle(x, y, dx, dy, radius, color));
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
            <header>
                <canvas></canvas>
                <h1>ANNAH ISENBERG</h1>
                <h3>Full-Stack Developer</h3>
            </header>
        )
    }
}
