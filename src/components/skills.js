import React from 'react'

export default function Skills() {
    const skills = ['HTML5', 'CSS', 'SASS', 'Responsive Design', 'Javascript (vanilla, jQuery, React, and Node)', 'Redux', 'Git', 'MongoDB', 'ES6', 'Heroku', 'Mocha', 'Chai', 'Enzyme']
    return (
        <section id="skills">
            <h2>SKILLS</h2>
            <div>
                {skills.map(skill => <p className="skill-item">{skill}</p>)}
            </div>
        </section>
    )
}
