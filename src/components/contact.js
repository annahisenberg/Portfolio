import React from 'react';
import email from '../assets/email-icon.svg';

export default function Contact() {
    return (
        <section id="contact">
            <h2>CONTACT</h2>
            <ul>
                <li><a href="mailto:annahisenberg@gmail.com">{email}</a></li>
                <li><a href="https://www.linkedin.com/in/annah-isenberg-a2b777144/">LinkedIn</a></li>
                <li><a href="https://github.com/annahisenberg">Github</a></li>
            </ul>
        </section>
    )
}
